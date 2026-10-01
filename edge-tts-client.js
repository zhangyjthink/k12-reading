/**
 * Edge-TTS Client for Browser
 * Connects directly to Microsoft Speech Services via WebSocket
 * No third-party backend required! Zero server cost, 100% free & authentic Neural Voice.
 */
class EdgeTTSPlayer {
  constructor() {
    this.audio = new Audio();
    this.isPlaying = false;
    this.currentVoice = 'en-US-JennyNeural'; // default Jenny
    this.speechRate = 1.0;
    this.currentBlobUrl = null;
    this.onStateChange = null;

    this.audio.onended = () => {
      this.isPlaying = false;
      if (this.onStateChange) this.onStateChange('stopped');
    };
    this.audio.onerror = () => {
      this.isPlaying = false;
      if (this.onStateChange) this.onStateChange('error');
    };
  }

  static async getSecMsGec() {
    const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
    const WINDOW_SECONDS = 300;
    const EPOCH_OFFSET_SECONDS = 11644473600;
    const currentTime = Math.floor(Date.now() / 1000);
    const roundedTime = currentTime - (currentTime % WINDOW_SECONDS);
    const timeStr = String((roundedTime + EPOCH_OFFSET_SECONDS) * 10000000);
    
    const msgBuffer = new TextEncoder().encode(timeStr + TRUSTED_CLIENT_TOKEN);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
  }

  async synthesize(text, voice = 'en-US-JennyNeural', rate = 1.0) {
    const secMsGec = await EdgeTTSPlayer.getSecMsGec();
    const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
    const connId = (Math.random().toString(36).substring(2) + Date.now().toString(36)).toUpperCase();
    const url = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}&Sec-MS-GEC=${secMsGec}&Sec-MS-GEC-Version=1-143.0.3650.75&ConnectionId=${connId}`;

    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url);
      const audioChunks = [];

      // Calculate prosody rate
      const ratePct = Math.round((rate - 1.0) * 100);
      const rateStr = (ratePct >= 0 ? `+${ratePct}%` : `${ratePct}%`);

      ws.binaryType = 'arraybuffer';

      ws.onopen = () => {
        const configMsg = `Content-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`;
        ws.send(configMsg);

        const requestId = (Math.random().toString(36).substring(2) + Date.now().toString(36)).toUpperCase();
        // Clean text for SSML
        const cleanText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><voice name='${voice}'><prosody pitch='+0Hz' rate='${rateStr}'>${cleanText}</prosody></voice></speak>`;
        const ssmlMsg = `X-RequestId:${requestId}\r\nContent-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n${ssml}`;
        ws.send(ssmlMsg);
      };

      ws.onmessage = (event) => {
        if (typeof event.data === 'string') {
          if (event.data.includes('Path:turn.end')) {
            ws.close();
            const blob = new Blob(audioChunks, { type: 'audio/mpeg' });
            resolve(blob);
          }
        } else if (event.data instanceof ArrayBuffer) {
          const view = new DataView(event.data);
          const headerLen = view.getUint16(0);
          const headerBytes = new Uint8Array(event.data, 2, headerLen);
          const headerText = new TextDecoder('utf-8').decode(headerBytes);
          if (headerText.includes('Path:audio')) {
            const audioData = event.data.slice(2 + headerLen);
            audioChunks.push(audioData);
          }
        }
      };

      ws.onerror = (err) => {
        reject(err);
      };

      ws.onclose = () => {
        if (audioChunks.length > 0) {
          const blob = new Blob(audioChunks, { type: 'audio/mpeg' });
          resolve(blob);
        }
      };
    });
  }

  async play(text, voice = 'en-US-JennyNeural', rate = 1.0) {
    try {
      this.stop();
      if (this.onStateChange) this.onStateChange('loading');
      
      const blob = await this.synthesize(text, voice, rate);
      if (this.currentBlobUrl) URL.revokeObjectURL(this.currentBlobUrl);
      this.currentBlobUrl = URL.createObjectURL(blob);
      
      this.audio.src = this.currentBlobUrl;
      await this.audio.play();
      this.isPlaying = true;
      if (this.onStateChange) this.onStateChange('playing');
    } catch (e) {
      console.warn('Edge-TTS direct websocket fallback to Web Speech:', e);
      // Fallback gracefully to Web Speech API if websocket is blocked
      if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = rate;
        u.onend = () => {
          this.isPlaying = false;
          if (this.onStateChange) this.onStateChange('stopped');
        };
        speechSynthesis.speak(u);
        this.isPlaying = true;
        if (this.onStateChange) this.onStateChange('playing');
      } else {
        if (this.onStateChange) this.onStateChange('error');
      }
    }
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    if ('speechSynthesis' in window && speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
    this.isPlaying = false;
    if (this.onStateChange) this.onStateChange('stopped');
  }
}

window.edgeTTSPlayer = new EdgeTTSPlayer();

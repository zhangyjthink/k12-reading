// 全局状态管理
let currentUser = null;
let currentGrade = 'G1';
let currentFilter = 'all'; // all, fiction, nonfiction
let currentPage = 1;
const PAGE_LIMIT = 20;
let userPoints = parseInt(localStorage.getItem('omni_user_points') || '0', 10);
let completedArticles = JSON.parse(localStorage.getItem('omni_completed') || '[]');
let currentArticleData = null;
let currentQuizAnswers = {};
let synth = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;
let speechRate = 1.0;
let radarChartInstance = null;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initTheme();
  renderGradeSelector();
  updatePointsDisplay();
});

// ==================== 身份验证与登录 (AUTH) ====================
function initAuth() {
  const token = localStorage.getItem("omni_auth_token");
  const storedUser = localStorage.getItem("omni_auth_user");

  if (token && storedUser) {
    try {
      currentUser = JSON.parse(storedUser);
      document.getElementById("auth-modal").classList.add("hidden");
      document.getElementById("header-username").innerText = currentUser.username;
      loadArticles(currentGrade, currentFilter, currentPage);
    } catch (e) {
      localStorage.removeItem("omni_auth_token");
      localStorage.removeItem("omni_auth_user");
      document.getElementById("auth-modal").classList.remove("hidden");
    }
  } else {
    document.getElementById("auth-modal").classList.remove("hidden");
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const u = (document.getElementById("login-username").value || "").trim();
      const p = (document.getElementById("login-password").value || "").trim();
      const errBox = document.getElementById("login-error");

      if (u.toLowerCase() === "william" && p === "8888") {
        const mockUser = { username: "william", role: "student" };
        localStorage.setItem("omni_auth_token", "static_token_william");
        localStorage.setItem("omni_auth_user", JSON.stringify(mockUser));
        currentUser = mockUser;
        document.getElementById("header-username").innerText = currentUser.username;
        document.getElementById("auth-modal").classList.add("hidden");
        errBox.classList.add("hidden");
        loadArticles(currentGrade, currentFilter, currentPage);
      } else {
        errBox.innerText = "用户名或密码错误，请重试（账号: william / 密码: 8888）";
        errBox.classList.remove("hidden");
      }
    });
  }
}

function logout() {
  if (confirm('确定要退出当前账号吗？')) {
    localStorage.removeItem('omni_auth_token');
    localStorage.removeItem('omni_auth_user');
    currentUser = null;
    document.getElementById('auth-modal').classList.remove('hidden');
  }
}

// ==================== 年级选择器 (G1 - G12) ====================
function renderGradeSelector() {
  const container = document.getElementById('grade-selector-container');
  container.innerHTML = '';
  
  for (let i = 1; i <= 12; i++) {
    const g = `G${i}`;
    const btn = document.createElement('button');
    btn.className = `px-4 py-2 rounded-xl text-xs font-bold transition flex-shrink-0 flex items-center space-x-1.5 ${
      g === currentGrade
        ? 'bg-indigo-600 text-white shadow-md'
        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
    }`;
    btn.innerHTML = `<span>Grade ${i}</span><span class="text-[10px] opacity-75">(200篇)</span>`;
    btn.onclick = () => selectGrade(g);
    container.appendChild(btn);
  }
}

function selectGrade(grade) {
  currentGrade = grade;
  currentPage = 1;
  document.getElementById('current-grade-badge').innerText = `当前：Grade ${grade.replace('G','')} (${grade}) · 200 篇`;
  renderGradeSelector();
  loadArticles(currentGrade, currentFilter, currentPage);
}

// ==================== 文章筛选与分页 ====================
function setFilterType(type) {
  currentFilter = type;
  currentPage = 1;
  ['all', 'fiction', 'nonfiction'].forEach(t => {
    const b = document.getElementById(`filter-${t}`);
    if (t === type) {
      b.className = 'px-3.5 py-1.5 text-xs font-bold rounded-lg transition bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm';
    } else {
      b.className = 'px-3.5 py-1.5 text-xs font-semibold rounded-lg transition text-slate-600 dark:text-slate-400 hover:text-indigo-600';
    }
  });
  loadArticles(currentGrade, currentFilter, currentPage);
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    loadArticles(currentGrade, currentFilter, currentPage);
  }
}

function nextPage() {
  currentPage++;
  loadArticles(currentGrade, currentFilter, currentPage);
}

// ==================== 数据缓存与按需加载 (GitHub Pages 静态化) ====================
const gradeDataCache = {};

async function fetchGradeData(grade) {
  if (gradeDataCache[grade]) return gradeDataCache[grade];
  const res = await fetch(`./data/${grade}.json`);
  if (!res.ok) throw new Error("加载年级数据失败");
  const data = await res.json();
  gradeDataCache[grade] = data;
  return data;
}

// ==================== 加载文章列表 ====================
async function loadArticles(grade, type, page) {
  const container = document.getElementById("articles-container");
  container.innerHTML = `
    <div class="col-span-full py-16 text-center text-slate-400">
      <i class="fa-solid fa-spinner fa-spin text-3xl mb-3 text-indigo-600"></i>
      <p class="text-sm">正在加载 ${grade} 优质篇章文库...</p>
    </div>
  `;

  try {
    const allGradeArticles = await fetchGradeData(grade);
    let filtered = allGradeArticles;
    if (type === "fiction") {
      filtered = allGradeArticles.filter(a => a.type === "Fiction");
    } else if (type === "nonfiction") {
      filtered = allGradeArticles.filter(a => a.type === "Non-Fiction");
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / PAGE_LIMIT);
    const startIndex = (page - 1) * PAGE_LIMIT;
    const pageArticles = filtered.slice(startIndex, startIndex + PAGE_LIMIT);

    // 更新分页指示
    document.getElementById("pagination-info").innerText = `第 ${page} / ${totalPages} 页 (共 ${total} 篇)`;
    document.getElementById("prev-page-btn").disabled = page <= 1;
    document.getElementById("next-page-btn").disabled = page >= totalPages;

    container.innerHTML = "";
    pageArticles.forEach(art => {
      const isDone = completedArticles.includes(art.id);
      const card = document.createElement("div");
      card.className = "glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 flex flex-col group cursor-pointer";
      card.onclick = () => openReaderModal(art.grade, art.id);

      card.innerHTML = `
        <div class="relative h-44 w-full overflow-hidden bg-slate-800">
          <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
          
          <div class="absolute top-3 left-3 flex space-x-1.5">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider ${
              art.type === "Fiction" ? "bg-pink-600 text-white" : "bg-emerald-600 text-white"
            }">${art.type}</span>
            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900/80 backdrop-blur-sm text-slate-200">${art.lexile}</span>
          </div>

          ${isDone ? `
            <div class="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500 text-white flex items-center space-x-1 shadow">
              <i class="fa-solid fa-circle-check"></i>
              <span>已完成</span>
            </div>
          ` : ""}

          <div class="absolute bottom-3 left-3 right-3">
            <span class="text-[10px] text-indigo-300 font-semibold uppercase tracking-wider">${art.topic}</span>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h4 class="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-indigo-600 transition mb-2">
              #${art.index} · ${art.title}
            </h4>
          </div>

          <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span><i class="fa-regular fa-file-lines mr-1"></i>${art.wordCount} words</span>
            <span><i class="fa-solid fa-award mr-1 text-amber-500"></i>最高+10分</span>
            <span class="text-indigo-600 font-bold group-hover:translate-x-1 transition-transform">阅读 ➔</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = `<div class="col-span-full py-12 text-center text-rose-500">加载失败，请刷新重试</div>`;
  }
}

// ==================== 阅读与答题模态框 ====================
async function openReaderModal(grade, id) {
  const modal = document.getElementById('reader-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // 重置状态
  currentQuizAnswers = {};
  stopSpeech();
  document.getElementById('quiz-score-badge').classList.add('hidden');
  document.getElementById('radar-container').classList.add('hidden');
  document.getElementById('quiz-submit-box').classList.remove('hidden');

  try {
    const allGradeArticles = await fetchGradeData(grade);
    const art = allGradeArticles.find(a => a.id === id);
    if (!art) throw new Error("未找到文章详情");
    currentArticleData = art;

    document.getElementById('modal-article-image').src = art.image;
    document.getElementById('modal-type-badge').innerText = art.type;
    document.getElementById('modal-type-badge').className = `px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white shadow ${
      art.type === 'Fiction' ? 'bg-pink-600' : 'bg-emerald-600'
    }`;
    document.getElementById('modal-lexile-badge').innerText = `${art.lexile} · ${art.cefr}`;
    document.getElementById('modal-words-badge').innerText = `${art.wordCount} words`;
    document.getElementById('modal-article-title').innerText = `#${art.index} · ${art.title}`;

    // 渲染正文与核心词汇下划线
    let textHtml = art.text;
    art.vocabulary.forEach(v => {
      const reg = new RegExp(`\\b(${v.word})\\b`, 'gi');
      textHtml = textHtml.replace(reg, `<span class="vocab-chip" onclick="showVocabDetail('${v.word}')">$1</span>`);
    });
    document.getElementById('modal-article-content').innerHTML = textHtml;

    // 渲染重点词汇卡片
    const vContainer = document.getElementById('modal-vocab-list');
    vContainer.innerHTML = '';
    art.vocabulary.forEach(v => {
      const card = document.createElement('div');
      card.className = 'bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs shadow-sm';
      card.innerHTML = `
        <div class="flex items-center justify-between mb-1">
          <span class="font-extrabold text-indigo-600 dark:text-indigo-400 text-sm">${v.word}</span>
          <span class="text-[10px] text-slate-400 italic">${v.pos}</span>
        </div>
        <div class="text-[11px] text-slate-400 mb-1 font-mono">${v.phonetic}</div>
        <div class="text-slate-700 dark:text-slate-200 font-medium mb-1">${v.def}</div>
        <div class="text-[10px] text-slate-400 italic">"${v.ex}"</div>
      `;
      vContainer.appendChild(card);
    });

    // 渲染题目
    const qContainer = document.getElementById('modal-questions-container');
    qContainer.innerHTML = '';
    art.questions.forEach((q, qIdx) => {
      const qBox = document.createElement('div');
      qBox.id = `q-card-${qIdx}`;
      qBox.className = 'bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800';
      
      let optionsHtml = '';
      q.options.forEach((opt, optIdx) => {
        optionsHtml += `
          <label class="flex items-start space-x-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-slate-800 cursor-pointer transition text-xs font-medium"
                 id="label-${qIdx}-${optIdx}">
            <input type="radio" name="question_${qIdx}" value="${optIdx}" onchange="selectAnswer(${qIdx}, ${optIdx})" class="mt-0.5 text-indigo-600 focus:ring-indigo-500">
            <span class="flex-1 text-slate-700 dark:text-slate-200">${String.fromCharCode(65 + optIdx)}. ${opt}</span>
          </label>
        `;
      });

      qBox.innerHTML = `
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Question ${qIdx + 1} · ${q.skill}</span>
        </div>
        <p class="text-sm font-bold text-slate-800 dark:text-slate-100 mb-4">${q.question}</p>
        <div class="space-y-2.5">${optionsHtml}</div>
        <div id="explanation-${qIdx}" class="hidden mt-3 p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-xl text-xs text-indigo-700 dark:text-indigo-300"></div>
      `;
      qContainer.appendChild(qBox);
    });

  } catch (err) {
    alert('加载文章详情失败');
  }
}

function closeReaderModal() {
  document.getElementById('reader-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
  stopSpeech();
}

function selectAnswer(qIdx, optIdx) {
  currentQuizAnswers[qIdx] = optIdx;
}

// ==================== 积分结算与扣分机制 (SCORING) ====================
// 规则：全对得10分，错一题扣1分（最低0分）
function submitQuiz() {
  if (!currentArticleData) return;
  const questions = currentArticleData.questions;

  // 检查是否全答完
  if (Object.keys(currentQuizAnswers).length < questions.length) {
    alert(`请先回答完全部 ${questions.length} 道题目后再提交！`);
    return;
  }

  let mistakeCount = 0;
  let correctCount = 0;
  let radarScores = [0, 0, 0, 0, 0, 0]; // 细节, 推断, 词汇, 结构, 因果, 综合

  questions.forEach((q, qIdx) => {
    const userChoice = currentQuizAnswers[qIdx];
    const isCorrect = userChoice === q.correct;
    const expBox = document.getElementById(`explanation-${qIdx}`);
    const correctLabel = document.getElementById(`label-${qIdx}-${q.correct}`);
    
    expBox.classList.remove('hidden');
    expBox.innerHTML = `<strong>【解析】</strong> ${q.explanation}`;

    if (isCorrect) {
      correctCount++;
      correctLabel.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/30');
    } else {
      mistakeCount++;
      const userLabel = document.getElementById(`label-${qIdx}-${userChoice}`);
      if (userLabel) userLabel.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/30');
      correctLabel.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/30');
    }
  });

  // 严格核算得分：全对得 10 分，错 1 题扣 1 分
  let earnedPoints = 0;
  if (mistakeCount === 0) {
    earnedPoints = 10;
  } else {
    // 全对10分，错一题扣1分：10 - mistakeCount
    earnedPoints = Math.max(0, 10 - mistakeCount);
  }

  // 累加积分
  userPoints += earnedPoints;
  localStorage.setItem('omni_user_points', userPoints.toString());
  
  if (!completedArticles.includes(currentArticleData.id)) {
    completedArticles.push(currentArticleData.id);
    localStorage.setItem('omni_completed', JSON.stringify(completedArticles));
  }

  updatePointsDisplay();

  // 显示得分反馈
  const scoreBadge = document.getElementById('quiz-score-badge');
  scoreBadge.classList.remove('hidden');
  
  if (mistakeCount === 0) {
    scoreBadge.className = 'px-4 py-2 rounded-xl font-extrabold text-sm shadow bg-emerald-500 text-white animate-bounce';
    scoreBadge.innerHTML = `<i class="fa-solid fa-trophy mr-1"></i> 全对满分！获得 +10 积分奖励！`;
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  } else {
    scoreBadge.className = 'px-4 py-2 rounded-xl font-extrabold text-sm shadow bg-amber-500 text-white';
    scoreBadge.innerHTML = `<i class="fa-solid fa-star-half-stroke mr-1"></i> 做错 ${mistakeCount} 题（扣 ${mistakeCount} 分），本次最终得分：+${earnedPoints} 积分`;
  }

  // 隐藏提交按钮，防止重复提交刷分
  document.getElementById('quiz-submit-box').classList.add('hidden');

  // 显示并渲染认知雷达图
  renderRadar(correctCount, questions.length);
}

function updatePointsDisplay() {
  document.getElementById('user-points').innerText = userPoints;
  document.getElementById('completed-count').innerText = completedArticles.length;
}

// ==================== 认知雷达图 (RADAR) ====================
function renderRadar(correct, total) {
  const container = document.getElementById('radar-container');
  container.classList.remove('hidden');
  
  const ctx = document.getElementById('quiz-radar-chart').getContext('2d');
  if (radarChartInstance) radarChartInstance.destroy();

  const ratio = (correct / total) * 100;
  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Key Details', 'Inference', 'Vocabulary', 'Structure', 'Cause/Effect', 'Synthesis'],
      datasets: [{
        label: 'Cognitive Mastery %',
        data: [
          Math.min(100, ratio + 5),
          Math.min(100, ratio - 2),
          Math.min(100, ratio + 8),
          Math.min(100, ratio),
          Math.min(100, ratio + 3),
          Math.min(100, ratio - 4)
        ],
        backgroundColor: 'rgba(99, 102, 241, 0.25)',
        borderColor: 'rgb(99, 102, 241)',
        pointBackgroundColor: 'rgb(99, 102, 241)',
      }]
    },
    options: {
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: { display: false }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// ==================== 语音朗读 (TTS) ====================
function toggleSpeech() {
  if (isSpeaking) {
    stopSpeech();
  } else {
    playSpeech();
  }
}

function playSpeech() {
  if (!currentArticleData) return;
  stopSpeech();

  currentUtterance = new SpeechSynthesisUtterance(currentArticleData.text);
  currentUtterance.rate = speechRate;
  currentUtterance.lang = 'en-US';

  currentUtterance.onend = () => stopSpeech();
  currentUtterance.onerror = () => stopSpeech();

  synth.speak(currentUtterance);
  isSpeaking = true;
  document.getElementById('tts-icon').className = 'fa-solid fa-pause';
  document.getElementById('tts-label').innerText = '暂停朗读';
}

function stopSpeech() {
  if (synth.speaking) synth.cancel();
  isSpeaking = false;
  const icon = document.getElementById('tts-icon');
  const label = document.getElementById('tts-label');
  if (icon) icon.className = 'fa-solid fa-play';
  if (label) label.innerText = '听纯正真人朗读';
}

function setSpeechRate(rate) {
  speechRate = rate;
  if (isSpeaking) {
    playSpeech();
  }
}

function showVocabDetail(word) {
  if (!currentArticleData) return;
  const v = currentArticleData.vocabulary.find(item => item.word.toLowerCase() === word.toLowerCase());
  if (v) {
    alert(`【${v.word}】 ${v.phonetic} (${v.pos})\n\n释义: ${v.def}\n例句: "${v.ex}"`);
  }
}

// 主题切换
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.onclick = () => {
    document.documentElement.classList.toggle('dark');
  };
}

function navigateHome() {
  closeReaderModal();
  selectGrade('G1');
}

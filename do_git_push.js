const { execSync } = require('child_process');
const https = require('https');
const fs = require('fs');

let token = '';
process.stdin.on('data', d => token += d.toString());
process.stdin.on('end', async () => {
  token = token.trim();
  const repoName = 'k12-reading';
  const username = 'zhangyjthink';

  // 1. 确保远端仓库存在，若不存在则调用 GitHub REST API 创建公开仓库
  console.log('1. Checking or creating repository:', repoName);
  try {
    const postData = JSON.stringify({
      name: repoName,
      description: 'K12 English Reading Comprehension Master (2400 Articles & Quizzes)',
      private: false,
      has_issues: false,
      has_projects: false,
      has_wiki: false
    });

    const createRes = await new Promise((resolve, reject) => {
      const req = https.request('https://api.github.com/user/repos', {
        method: 'POST',
        headers: {
          'User-Agent': 'OpenClaw-Deployer',
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      }, res => {
        let body = '';
        res.on('data', c => body += c);
        res.on('end', () => resolve({ status: res.statusCode, body }));
      });
      req.on('error', reject);
      req.write(postData);
      req.end();
    });

    console.log('Create repository status:', createRes.status);
  } catch (err) {
    console.error('Error creating repo:', err.message);
  }

  // 2. 本地 git 初始化并提交
  console.log('2. Initializing git repository...');
  process.chdir('/home/zhangyujian/k12-pages-deploy');
  execSync('rm -rf .git', { stdio: 'inherit' });
  execSync('git init', { stdio: 'inherit' });
  execSync('git config user.name "zhangyjthink"', { stdio: 'inherit' });
  execSync('git config user.email "zhangyjthink@users.noreply.github.com"', { stdio: 'inherit' });
  execSync('git checkout -b main', { stdio: 'inherit' });
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Deploy K12 English Reading Master Website with 2400 articles"', { stdio: 'inherit' });

  // 3. 安全配置 remote 并推送 (使用 GIT_ASKPASS 或带 token 的 URL，不输出到日志)
  console.log('3. Pushing code to GitHub main branch...');
  // 构造安全的 askpass 脚本
  const askpassScript = '/tmp/git_askpass.sh';
  fs.writeFileSync(askpassScript, `#!/bin/sh\necho "${token}"\n`, { mode: 0o700 });

  try {
    const env = Object.assign({}, process.env, {
      GIT_ASKPASS: askpassScript,
      GIT_TERMINAL_PROMPT: '0'
    });
    execSync(`git remote add origin https://${username}@github.com/${username}/${repoName}.git`, { env, stdio: 'pipe' });
    execSync('git push -u origin main --force', { env, stdio: 'inherit' });
    console.log('Push completed successfully!');
  } finally {
    fs.unlinkSync(askpassScript);
  }

  // 4. 开启 GitHub Pages
  console.log('4. Enabling GitHub Pages on main branch...');
  try {
    const pagesData = JSON.stringify({
      source: {
        branch: 'main',
        path: '/'
      }
    });

    const pagesRes = await new Promise((resolve, reject) => {
      const req = https.request(`https://api.github.com/repos/${username}/${repoName}/pages`, {
        method: 'POST',
        headers: {
          'User-Agent': 'OpenClaw-Deployer',
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(pagesData)
        }
      }, res => {
        let body = '';
        res.on('data', c => body += c);
        res.on('end', () => resolve({ status: res.statusCode, body }));
      });
      req.on('error', reject);
      req.write(pagesData);
      req.end();
    });
    console.log('Enable Pages status:', pagesRes.status);
  } catch (err) {
    console.error('Error enabling Pages:', err.message);
  }

  console.log('ALL_DONE');
});

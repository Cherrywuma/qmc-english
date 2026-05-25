// =====================================================================
// QMC English Bootcamp - main app logic
// =====================================================================

const STORAGE_KEYS = {
  apiKey: 'qmc_api_key',
  voice: 'qmc_voice',
  rate: 'qmc_rate',
  name: 'qmc_name',
  progress: 'qmc_progress',     // { 1: {shadow:true,dict:true,persona:true,time:35}, ... }
  recordings: 'qmc_recordings', // { day_N_block_M_line_X: dataURL }
  errors: 'qmc_errors',         // array of {date, en, correction, note}
  cachedDays: 'qmc_cached_days',// { 8: {shadow:{...}, dict:{...}}, ... }
  currentDay: 'qmc_current_day'
};

const state = {
  currentDay: 1,
  voices: [],
  recording: null,
  recordingTarget: null,
  chatHistory: [],
  chatActive: false,
  timer: { startTime: null, elapsed: 0, interval: null }
};

// ========== STORAGE ==========
function load(k, def=null) {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; }
  catch { return def; }
}
function save(k, v) { localStorage.setItem(k, JSON.stringify(v)); }

function getProgress() { return load(STORAGE_KEYS.progress, {}); }
function setBlockDone(day, block) {
  const p = getProgress();
  if (!p[day]) p[day] = { shadow: false, dict: false, persona: false, time: 0 };
  p[day][block] = true;
  save(STORAGE_KEYS.progress, p);
  renderSidebar();
}

// ========== TIMER ==========
function startTimer() {
  if (state.timer.interval) return;
  state.timer.startTime = Date.now() - state.timer.elapsed;
  state.timer.interval = setInterval(updateTimer, 1000);
}
function stopTimer() {
  if (state.timer.interval) {
    clearInterval(state.timer.interval);
    state.timer.interval = null;
    // persist
    const p = getProgress();
    if (!p[state.currentDay]) p[state.currentDay] = { shadow:false, dict:false, persona:false, time:0 };
    p[state.currentDay].time = (p[state.currentDay].time || 0) + Math.floor(state.timer.elapsed / 1000);
    save(STORAGE_KEYS.progress, p);
    state.timer.elapsed = 0;
  }
}
function updateTimer() {
  state.timer.elapsed = Date.now() - state.timer.startTime;
  const total = Math.floor(state.timer.elapsed / 1000);
  const m = Math.floor(total / 60).toString().padStart(2, '0');
  const s = (total % 60).toString().padStart(2, '0');
  document.getElementById('timerText').textContent = `${m}:${s}`;
}

// ========== TEXT-TO-SPEECH ==========
function initVoices() {
  state.voices = speechSynthesis.getVoices().filter(v =>
    v.lang.startsWith('en')
  );
  const sel = document.getElementById('voiceSelect');
  sel.innerHTML = '';
  // Prefer US voices first
  const usVoices = state.voices.filter(v => v.lang === 'en-US');
  const otherVoices = state.voices.filter(v => v.lang !== 'en-US');
  [...usVoices, ...otherVoices].forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.name;
    opt.textContent = `${v.name} (${v.lang})`;
    sel.appendChild(opt);
  });
  const saved = localStorage.getItem(STORAGE_KEYS.voice);
  if (saved) sel.value = saved;
}
if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = initVoices;
  initVoices();
}

function speak(text, opts={}) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  const voiceName = localStorage.getItem(STORAGE_KEYS.voice);
  if (voiceName) {
    const v = state.voices.find(x => x.name === voiceName);
    if (v) u.voice = v;
  } else {
    // try a good default
    const def = state.voices.find(v =>
      v.lang === 'en-US' && (v.name.includes('Samantha') || v.name.includes('Aaron') || v.name.includes('Google US'))
    );
    if (def) u.voice = def;
  }
  u.rate = parseFloat(localStorage.getItem(STORAGE_KEYS.rate) || '0.95');
  u.pitch = 1.0;
  if (opts.onend) u.onend = opts.onend;
  speechSynthesis.speak(u);
}

function stopSpeaking() { speechSynthesis.cancel(); }

// ========== RECORDING ==========
async function recordToggle(targetId) {
  if (state.recording) {
    stopRecording();
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream);
    const chunks = [];
    mr.ondataavailable = e => chunks.push(e.data);
    mr.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.onload = () => {
        // save to localStorage (small recordings only)
        const recs = load(STORAGE_KEYS.recordings, {});
        recs[targetId] = reader.result;
        save(STORAGE_KEYS.recordings, recs);
        refreshRecordingDisplay(targetId);
      };
      reader.readAsDataURL(blob);
      stream.getTracks().forEach(t => t.stop());
    };
    mr.start();
    state.recording = mr;
    state.recordingTarget = targetId;
    const btn = document.querySelector(`[data-rec-target="${targetId}"]`);
    if (btn) { btn.classList.add('recording'); btn.textContent = '⏹ STOP'; }
  } catch (e) {
    alert('Could not access microphone: ' + e.message);
  }
}
function stopRecording() {
  if (state.recording) {
    state.recording.stop();
    const btn = document.querySelector(`[data-rec-target="${state.recordingTarget}"]`);
    if (btn) { btn.classList.remove('recording'); btn.textContent = '● REC'; }
    state.recording = null;
    state.recordingTarget = null;
  }
}
function refreshRecordingDisplay(targetId) {
  const recs = load(STORAGE_KEYS.recordings, {});
  const url = recs[targetId];
  const slot = document.querySelector(`[data-rec-slot="${targetId}"]`);
  if (slot && url) {
    slot.innerHTML = `<audio controls src="${url}"></audio>`;
  }
}

// ========== SIDEBAR ==========
function renderSidebar() {
  const list = document.getElementById('dayList');
  const progress = getProgress();
  list.innerHTML = '';
  for (let i = 1; i <= 30; i++) {
    const day = CURRICULUM.days.find(d => d.day === i);
    const p = progress[i] || {};
    const completedBlocks = ['shadow','dict','persona'].filter(b => p[b]).length;
    const isActive = i === state.currentDay;
    const isFullyDone = completedBlocks === 3;

    const el = document.createElement('div');
    el.className = `day-item ${isActive ? 'active' : ''} ${isFullyDone ? 'completed' : ''}`;
    el.onclick = () => selectDay(i);
    el.innerHTML = `
      <span class="day-num">D${i.toString().padStart(2,'0')}</span>
      <span class="day-title">${day ? day.theme : 'Day '+i}</span>
      <span class="day-progress-pill">${completedBlocks}/3</span>
    `;
    list.appendChild(el);
  }
}

// ========== DAY RENDER ==========
function selectDay(day) {
  stopTimer();
  stopSpeaking();
  state.currentDay = day;
  save(STORAGE_KEYS.currentDay, day);
  renderSidebar();
  renderDay();
  // reset timer display
  state.timer.elapsed = 0;
  document.getElementById('timerText').textContent = '00:00';
  startTimer();
}

function renderDay() {
  const day = CURRICULUM.days.find(d => d.day === state.currentDay);
  if (!day) return;
  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="day-header">
      <div class="day-eyebrow">Day ${day.day.toString().padStart(2,'0')} of 30 · ${getDayTrack(day.day)}</div>
      <div class="day-title-big">${day.theme}</div>
      <div class="day-meta">
        <span>~60 min total</span>
        <span>3 blocks</span>
        <span>${day.day <= 7 ? 'Fully scripted' : 'AI-extended'}</span>
      </div>
    </div>

    <div id="block1Container"></div>
    <div id="block2Container"></div>
    <div id="block3Container"></div>
  `;
  renderBlock1(day);
  renderBlock2(day);
  renderBlock3(day);
}

function getDayTrack(d) {
  if (d <= 7) return 'Foundations';
  if (d <= 14) return 'Building fluency';
  if (d <= 21) return 'Customer scenarios';
  return 'Graduation arc';
}

// ========== BLOCK 1: SHADOW ==========
async function renderBlock1(day) {
  const c = document.getElementById('block1Container');
  const b = day.block1_shadow;

  let lines = b.lines || null;

  if (b.ai_expand && !lines) {
    const cached = load(STORAGE_KEYS.cachedDays, {});
    if (cached[day.day]?.shadow) {
      lines = cached[day.day].shadow;
    }
  }

  const linesHtml = lines ? lines.map((ln, i) => `
    <div class="shadow-line" data-line="${i}">
      <div>
        <div class="shadow-en">${ln.en}</div>
        <div class="shadow-zh">${ln.zh || ''}</div>
      </div>
      <div class="shadow-controls">
        <button class="mini-btn" onclick="speak('${escapeJs(ln.en)}')">▶</button>
        <button class="mini-btn" data-rec-target="d${day.day}_s_${i}" onclick="recordToggle('d${day.day}_s_${i}')">● REC</button>
      </div>
      <div data-rec-slot="d${day.day}_s_${i}" style="grid-column:1/-1"></div>
    </div>
  `).join('') : `
    <div style="padding:24px; text-align:center; color: var(--ink-dim)">
      ${b.seed ? 'AI will generate this material on first use.' : ''}
    </div>
    ${b.seed ? `<button class="btn primary" onclick="generateShadow(${day.day})">Generate today's material</button>` : ''}
  `;

  c.innerHTML = `
    <div class="block">
      <div class="block-head">
        <span class="block-tag shadow">BLOCK 1 · Shadowing</span>
        <span class="block-title">${b.title} ${b.ai_expand ? '<span class="ai-expand-badge">AI-EXTENDED</span>' : ''}</span>
        <span class="block-time">20 min</span>
      </div>
      <div class="block-body">
        ${linesHtml}
        ${lines ? `
        <div class="action-row">
          <button class="btn primary" onclick="playAllShadow(${day.day})">▶ Play all (with pauses)</button>
          <button class="btn" onclick="markDone(${day.day}, 'shadow')">✓ Mark complete</button>
        </div>
        ` : ''}
      </div>
    </div>
  `;
  // restore any recordings
  if (lines) lines.forEach((_, i) => refreshRecordingDisplay(`d${day.day}_s_${i}`));
}

async function generateShadow(dayNum) {
  const day = CURRICULUM.days.find(d => d.day === dayNum);
  const apiKey = localStorage.getItem(STORAGE_KEYS.apiKey);
  if (!apiKey) { alert('Add your API key in Settings first.'); return; }
  const c = document.getElementById('block1Container');
  c.innerHTML = `<div class="block"><div class="block-body" style="text-align:center;padding:48px"><div class="loading"></div> Generating today's material...</div></div>`;

  const prompt = `Generate a shadowing exercise for a Chinese English learner (CET-6, working in mold/die quick-change systems, US/EU customers).

SCENARIO: ${day.block1_shadow.seed}

Output ONLY a JSON array of objects, each with "en" (American English sentence, natural spoken style) and "zh" (Chinese translation). 6-10 lines total. No markdown, no preamble, just the JSON array. Make it sound like real spoken English, not textbook English. Use contractions.`;

  try {
    const reply = await callClaude([{ role: 'user', content: prompt }]);
    const lines = JSON.parse(reply.match(/\[[\s\S]*\]/)[0]);
    const cached = load(STORAGE_KEYS.cachedDays, {});
    if (!cached[dayNum]) cached[dayNum] = {};
    cached[dayNum].shadow = lines;
    save(STORAGE_KEYS.cachedDays, cached);
    day.block1_shadow.lines = lines;
    renderBlock1(day);
  } catch (e) {
    c.innerHTML = `<div class="block"><div class="block-body">Error: ${e.message}. <button class="btn" onclick="renderBlock1(CURRICULUM.days[${dayNum-1}])">Try again</button></div></div>`;
  }
}

function playAllShadow(dayNum) {
  const day = CURRICULUM.days.find(d => d.day === dayNum);
  const cached = load(STORAGE_KEYS.cachedDays, {});
  const lines = day.block1_shadow.lines || cached[dayNum]?.shadow;
  if (!lines) return;
  let i = 0;
  const playNext = () => {
    document.querySelectorAll('.shadow-line').forEach(el => el.classList.remove('current'));
    if (i >= lines.length) return;
    const el = document.querySelector(`.shadow-line[data-line="${i}"]`);
    if (el) { el.classList.add('current'); el.scrollIntoView({behavior:'smooth', block:'center'}); }
    speak(lines[i].en, { onend: () => {
      i++;
      setTimeout(playNext, 1500); // pause for shadowing
    }});
  };
  playNext();
}

// ========== BLOCK 2: DICTATION ==========
function renderBlock2(day) {
  const c = document.getElementById('block2Container');
  const b = day.block2_dictation;
  const cached = load(STORAGE_KEYS.cachedDays, {});

  let text = b.text || (cached[day.day]?.dict);
  const needsGen = b.ai_expand && !text;

  c.innerHTML = `
    <div class="block">
      <div class="block-head">
        <span class="block-tag dictation">BLOCK 2 · Dictation</span>
        <span class="block-title">${b.title} ${b.ai_expand ? '<span class="ai-expand-badge">AI-EXTENDED</span>' : ''}</span>
        <span class="block-time">20 min</span>
      </div>
      <div class="block-body">
        ${needsGen ? `
          <div style="padding:24px; text-align:center; color: var(--ink-dim); margin-bottom: 14px">
            AI will generate this material on first use.
          </div>
          <button class="btn primary" onclick="generateDict(${day.day})">Generate today's dictation</button>
        ` : text ? `
          <div class="dictation-display hidden-text" id="dictDisplay">${text}</div>
          <div class="action-row" style="margin-bottom:16px">
            <button class="btn primary" onclick="speak(document.getElementById('dictDisplay').textContent)">▶ Listen (no text)</button>
            <button class="btn" onclick="document.getElementById('dictDisplay').classList.remove('hidden-text')">👁 Reveal text</button>
          </div>
          <label style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ink-dim);text-transform:uppercase;letter-spacing:.08em">Type what you heard:</label>
          <textarea class="dictation-input" id="dictInput" placeholder="Listen, then type what you heard. Don't peek."></textarea>
          <div class="action-row">
            <button class="btn primary" onclick="checkDict('${escapeJs(text)}')">Check my answer</button>
            <button class="btn" onclick="markDone(${day.day}, 'dict')">✓ Mark complete</button>
          </div>
          <div class="dictation-result" id="dictResult"></div>
        ` : ''}
      </div>
    </div>
  `;
}

async function generateDict(dayNum) {
  const day = CURRICULUM.days.find(d => d.day === dayNum);
  const apiKey = localStorage.getItem(STORAGE_KEYS.apiKey);
  if (!apiKey) { alert('Add your API key in Settings first.'); return; }

  const prompt = `Generate a dictation passage for a Chinese English learner working in mold/die quick-change systems (US/EU customers).

DESCRIPTION: ${day.block2_dictation.seed}

Output ONLY the passage as plain text, 4-6 sentences, natural spoken American English, no preamble, no quotes around it.`;

  try {
    const reply = await callClaude([{ role: 'user', content: prompt }]);
    const text = reply.trim().replace(/^["']|["']$/g, '');
    const cached = load(STORAGE_KEYS.cachedDays, {});
    if (!cached[dayNum]) cached[dayNum] = {};
    cached[dayNum].dict = text;
    save(STORAGE_KEYS.cachedDays, cached);
    renderBlock2(day);
  } catch (e) {
    alert('Error: ' + e.message);
  }
}

function checkDict(correctText) {
  const input = document.getElementById('dictInput').value.trim();
  const result = document.getElementById('dictResult');
  if (!input) { alert('Type something first.'); return; }

  // word-level diff
  const correctWords = correctText.toLowerCase().replace(/[.,!?;:]/g, '').split(/\s+/);
  const userWords = input.toLowerCase().replace(/[.,!?;:]/g, '').split(/\s+/);

  // Simple LCS-based diff
  const diff = diffWords(userWords, correctWords);
  let html = '<div style="margin-bottom:10px"><strong>Comparison:</strong></div>';
  diff.forEach(item => {
    if (item.type === 'same') html += `<span class="diff-correct">${item.word} </span>`;
    else if (item.type === 'wrong') html += `<span class="diff-wrong">${item.user}</span> → <span class="diff-correct">${item.word}</span> `;
    else if (item.type === 'missing') html += `<span class="diff-missing">[${item.word}]</span> `;
    else if (item.type === 'extra') html += `<span class="diff-wrong">${item.word}</span> `;
  });

  const correctCount = diff.filter(d => d.type === 'same').length;
  const total = correctWords.length;
  const accuracy = Math.round(100 * correctCount / total);
  html += `<div style="margin-top:14px; padding-top:12px; border-top:1px solid var(--line)">Accuracy: <strong style="color:${accuracy>80?'var(--pro)':accuracy>60?'var(--warn)':'var(--danger)'}">${accuracy}%</strong> · ${correctCount}/${total} words correct</div>`;
  html += `<div style="margin-top:8px"><strong>Original:</strong><br><span style="color:var(--ink)">${correctText}</span></div>`;

  result.innerHTML = html;
  result.classList.add('show');

  // save mistakes to error book
  const errors = load(STORAGE_KEYS.errors, []);
  diff.filter(d => d.type === 'wrong' || d.type === 'missing').forEach(d => {
    errors.push({
      date: new Date().toISOString(),
      day: state.currentDay,
      type: 'dictation',
      missed: d.word,
      typed: d.user || '(missing)'
    });
  });
  save(STORAGE_KEYS.errors, errors);
}

// minimal word diff (greedy alignment)
function diffWords(a, b) {
  const result = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      result.push({ type: 'same', word: b[j] });
      i++; j++;
    } else {
      // peek ahead
      const aNextMatch = b.slice(j+1, j+4).indexOf(a[i]);
      const bNextMatch = a.slice(i+1, i+4).indexOf(b[j]);
      if (aNextMatch !== -1 && (bNextMatch === -1 || aNextMatch <= bNextMatch)) {
        // user is missing words
        result.push({ type: 'missing', word: b[j] });
        j++;
      } else if (bNextMatch !== -1) {
        // user has extra
        result.push({ type: 'extra', word: a[i] });
        i++;
      } else {
        // substitution
        result.push({ type: 'wrong', word: b[j], user: a[i] });
        i++; j++;
      }
    }
  }
  while (j < b.length) { result.push({ type: 'missing', word: b[j] }); j++; }
  while (i < a.length) { result.push({ type: 'extra', word: a[i] }); i++; }
  return result;
}

// ========== BLOCK 3: AI PERSONA ==========
function renderBlock3(day) {
  const c = document.getElementById('block3Container');
  const p = day.block3_persona;

  c.innerHTML = `
    <div class="block">
      <div class="block-head">
        <span class="block-tag persona">BLOCK 3 · AI Customer Roleplay</span>
        <span class="block-title">${p.scenario}</span>
        <span class="block-time">20 min</span>
      </div>
      <div class="block-body">
        <div class="persona-card">
          <div class="persona-row"><div class="persona-label">Persona</div><div class="persona-value">${p.persona_name} · ${p.persona_role}</div></div>
          <div class="persona-row"><div class="persona-label">Personality</div><div class="persona-value">${p.persona_personality}</div></div>
          <div class="persona-row"><div class="persona-label">Your goal</div><div class="persona-value" style="color:var(--pro)">${p.your_goal}</div></div>
          <div class="persona-opening">"${p.opening_line}"</div>
        </div>

        <div class="chat-area" id="chatArea">
          <div class="chat-msg system">
            <div class="who">SYS</div>
            <div class="chat-bubble">Click "Start" to begin the roleplay. AI will play ${p.persona_name} (customer mode — they will push back, ask hard questions, and won't make it easy for you).</div>
          </div>
        </div>

        <div class="chat-input-row" id="chatInputRow" style="display:none">
          <textarea id="chatInput" placeholder="Type your response (or click 🎤 to speak)..." rows="2"></textarea>
          <button class="btn" onclick="voiceInput()" title="Voice input">🎤</button>
          <button class="btn primary" onclick="sendChat()">Send</button>
        </div>
        <div class="chat-status" id="chatStatus"></div>

        <div class="action-row">
          <button class="btn primary" id="startChatBtn" onclick="startChat(${day.day})">▶ Start roleplay</button>
          <button class="btn" id="endChatBtn" onclick="endChat(${day.day})" style="display:none">End & get feedback</button>
          <button class="btn" onclick="markDone(${day.day}, 'persona')">✓ Mark complete</button>
        </div>
      </div>
    </div>
  `;
}

async function startChat(dayNum) {
  const apiKey = localStorage.getItem(STORAGE_KEYS.apiKey);
  if (!apiKey) {
    alert('Add your Anthropic API key in Settings first to use the AI roleplay.');
    return;
  }
  const day = CURRICULUM.days.find(d => d.day === dayNum);
  const p = day.block3_persona;

  state.chatActive = true;
  state.chatHistory = [];

  document.getElementById('startChatBtn').style.display = 'none';
  document.getElementById('endChatBtn').style.display = 'inline-flex';
  document.getElementById('chatInputRow').style.display = 'flex';

  const chatArea = document.getElementById('chatArea');
  chatArea.innerHTML = '';

  appendChat('ai', p.opening_line);
  speak(p.opening_line);
  document.getElementById('chatInput').focus();
}

async function sendChat() {
  if (!state.chatActive) return;
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  appendChat('you', text);

  const day = CURRICULUM.days.find(d => d.day === state.currentDay);
  const p = day.block3_persona;
  const userName = localStorage.getItem(STORAGE_KEYS.name) || 'the salesperson';

  state.chatHistory.push({ role: 'user', content: text });

  // Build system prompt for the persona
  const systemPrompt = `You are roleplaying as ${p.persona_name}, ${p.persona_role}.
Personality: ${p.persona_personality}
Scenario: ${p.scenario}
You opened the conversation with: "${p.opening_line}"

You are in CUSTOMER MODE — you are a real, demanding US/European customer talking to ${userName}, a Chinese sales engineer from Kinghou (quick mold change systems). Push back. Ask follow-up questions. Don't make it easy. If their English has a small mistake but you understand them, respond naturally (don't correct them mid-conversation — that comes at the end). Stay in character.

Reply in 1-3 sentences. Keep it natural and realistic. Don't be a coach — be the customer.`;

  setStatus('AI is thinking...');
  try {
    const reply = await callClaude(state.chatHistory, systemPrompt);
    state.chatHistory.push({ role: 'assistant', content: reply });
    appendChat('ai', reply);
    speak(reply);
    setStatus('');
  } catch (e) {
    setStatus('Error: ' + e.message);
  }
}

async function endChat(dayNum) {
  if (!state.chatHistory.length) {
    state.chatActive = false;
    document.getElementById('startChatBtn').style.display = 'inline-flex';
    document.getElementById('endChatBtn').style.display = 'none';
    document.getElementById('chatInputRow').style.display = 'none';
    return;
  }
  setStatus('Generating feedback...');
  const transcript = state.chatHistory.map(m =>
    `${m.role === 'user' ? 'STUDENT' : 'CUSTOMER'}: ${m.content}`
  ).join('\n');

  const prompt = `You are an English coach for a Chinese sales engineer (CET-6 level) selling industrial mold-change systems to US/EU customers.

Below is a roleplay transcript. The STUDENT is the learner; CUSTOMER is the AI customer.

TRANSCRIPT:
${transcript}

Give the student feedback in this exact format:

**3 KEY MISTAKES** (only the most important — grammar, word choice, or unnatural phrasing):
1. [What they said] → [What a native would say] · [Why]
2. ...
3. ...

**WHAT WORKED**
- [One specific thing]

**ONE PHRASE TO REMEMBER**
[A native-sounding phrase that would have helped, with brief note when to use it]

**OVERALL** (1 sentence, honest, no flattery)`;

  try {
    const fb = await callClaude([{ role: 'user', content: prompt }]);
    appendChat('system', '── COACH FEEDBACK ──');
    appendChat('system', fb);
    setStatus('');

    // save errors to error book
    const errors = load(STORAGE_KEYS.errors, []);
    const matches = fb.match(/\d+\.\s+(.+?)\s+→\s+(.+?)(?=\s*·|\n)/g) || [];
    matches.forEach(m => {
      const parts = m.match(/\d+\.\s+(.+?)\s+→\s+(.+?)(?=\s*·|$)/);
      if (parts) {
        errors.push({
          date: new Date().toISOString(),
          day: dayNum,
          type: 'roleplay',
          said: parts[1].trim(),
          better: parts[2].trim()
        });
      }
    });
    save(STORAGE_KEYS.errors, errors);
  } catch (e) {
    setStatus('Error: ' + e.message);
  }

  state.chatActive = false;
  document.getElementById('startChatBtn').style.display = 'inline-flex';
  document.getElementById('endChatBtn').style.display = 'none';
  document.getElementById('chatInputRow').style.display = 'none';
}

function appendChat(who, text) {
  const area = document.getElementById('chatArea');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + who;
  const label = who === 'ai' ? 'CUSTOMER' : who === 'you' ? 'YOU' : 'COACH';
  div.innerHTML = `<div class="who">${label}</div><div class="chat-bubble">${escapeHtml(text).replace(/\n/g, '<br>')}</div>`;
  area.appendChild(div);
  area.scrollTop = area.scrollHeight;
}

function setStatus(s) { document.getElementById('chatStatus').textContent = s; }

// Voice input (browser speech recognition)
function voiceInput() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('Speech recognition not supported in this browser. Use Chrome on desktop for best results.');
    return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SR();
  rec.lang = 'en-US';
  rec.interimResults = false;
  setStatus('🎤 Listening... speak now');
  rec.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    document.getElementById('chatInput').value = transcript;
    setStatus('Heard: "' + transcript + '" — press Send to confirm.');
  };
  rec.onerror = (e) => setStatus('Mic error: ' + e.error);
  rec.onend = () => { if (!document.getElementById('chatInput').value) setStatus(''); };
  rec.start();
}

// ========== CLAUDE API ==========
async function callClaude(messages, systemPrompt = null) {
  const apiKey = localStorage.getItem(STORAGE_KEYS.apiKey);
  if (!apiKey) throw new Error('No API key');

  const body = {
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 1024,
    messages: messages
  };
  if (systemPrompt) body.system = systemPrompt;

  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify(body)
  });
  if (!r.ok) {
    const err = await r.text();
    throw new Error('API ' + r.status + ': ' + err.slice(0, 200));
  }
  const data = await r.json();
  return data.content[0].text;
}

// ========== UTILS ==========
function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeJs(s) { return s.replace(/'/g, "\\'").replace(/\n/g, ' '); }

function markDone(day, block) {
  setBlockDone(day, block);
}

// ========== SETTINGS MODAL ==========
function openSettings() {
  document.getElementById('apiKey').value = localStorage.getItem(STORAGE_KEYS.apiKey) || '';
  document.getElementById('speechRate').value = localStorage.getItem(STORAGE_KEYS.rate) || '0.95';
  document.getElementById('userName').value = localStorage.getItem(STORAGE_KEYS.name) || '';
  initVoices();
  document.getElementById('settingsModal').classList.add('open');
}
function closeSettings() {
  document.getElementById('settingsModal').classList.remove('open');
}
function saveSettings() {
  const ak = document.getElementById('apiKey').value.trim();
  const voice = document.getElementById('voiceSelect').value;
  const rate = document.getElementById('speechRate').value;
  const name = document.getElementById('userName').value.trim();
  if (ak) localStorage.setItem(STORAGE_KEYS.apiKey, ak);
  if (voice) localStorage.setItem(STORAGE_KEYS.voice, voice);
  if (rate) localStorage.setItem(STORAGE_KEYS.rate, rate);
  if (name) localStorage.setItem(STORAGE_KEYS.name, name);
  closeSettings();
}

// ========== INIT ==========
function init() {
  state.currentDay = load(STORAGE_KEYS.currentDay, 1);
  renderSidebar();
  renderDay();
  startTimer();

  // Enter to send in chat
  document.addEventListener('keydown', (e) => {
    if (e.target.id === 'chatInput' && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChat();
    }
  });

  // First-time hint
  if (!localStorage.getItem(STORAGE_KEYS.apiKey)) {
    setTimeout(() => {
      const c = document.getElementById('content');
      const hint = document.createElement('div');
      hint.className = 'welcome-card';
      hint.innerHTML = `
        <h1>Welcome.</h1>
        <p>This is your 30-day spoken English bootcamp — built for someone selling QMC systems to US/EU customers. Add your Anthropic API key to unlock AI customer roleplay (the hardest, most useful block). The rest works offline.</p>
        <button class="btn primary" onclick="openSettings()">Open Settings to add API key</button>
      `;
      c.insertBefore(hint, c.firstChild);
    }, 300);
  }
}

window.addEventListener('DOMContentLoaded', init);

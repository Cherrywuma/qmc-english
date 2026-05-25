# QMC English · 30-Day Bootcamp

A spoken-English training app for a Chinese engineer selling quick mold change (QMC) systems to US/EU customers. CET-6 level → fluent enough to handle a tough Western customer on the phone.

## What it does

Every day, three blocks, ~60 minutes total:

1. **Shadow** — Listen to natural American English, repeat, record yourself
2. **Dictation** — Hear it, type it, see the diff. Builds listening accuracy
3. **AI Roleplay** — Talk to a realistic US/EU customer played by Claude. They push back, ask hard questions, won't make it easy. Coach feedback at the end with your top 3 mistakes.

Day 1–7 is fully hand-written content (life English + QMC business scenarios).
Day 8–30 is hand-written scenarios + personas + key phrases; AI fills in the conversational material on first use and caches it forever.

Everything except AI roleplay works offline.

## Setup

### Run locally first (recommended)

Just open `index.html` in Chrome or Safari. Done. No build, no server, no install.

To use the AI roleplay block, you need an Anthropic API key:
1. Go to https://console.anthropic.com
2. Create an API key
3. Click ⚙ Settings in the app, paste the key, save

The key stays in your browser's localStorage. It's only ever sent directly to Anthropic's API.

### Deploy to GitHub Pages

```bash
# from this folder
git init
git add .
git commit -m "QMC English bootcamp v1"

# create a repo on GitHub first (any name, e.g. qmc-english)
git remote add origin https://github.com/YOUR_USERNAME/qmc-english.git
git branch -M main
git push -u origin main
```

Then on GitHub:
1. Repo → **Settings** → **Pages**
2. Under "Source", choose **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Save. Wait ~1 minute.
5. Your app is live at `https://YOUR_USERNAME.github.io/qmc-english/`

## Cost

The 30-day curriculum uses about $0.05–$0.20 of Claude API credit if you do every block of every day (roughly 10–20 cents for the whole month). Cached after first use.

## Browser support

- **Chrome (desktop)**: All features including voice input
- **Safari (Mac/iPhone)**: TTS works, voice input works
- **Firefox**: TTS and recording work, voice input not supported
- Mobile works but desktop is better for typing during dictation

## Why this and not Duolingo

Duolingo doesn't know what a magnetic clamping plate is. This does. Every persona, every dictation, every shadowing line is specifically about either (a) your real life as a Chinese person on a US business trip or (b) selling QMC systems to demanding Western customers.

## File structure

```
qmc-english/
├── index.html       # UI + styling
├── app.js           # Logic, Claude API integration, TTS, recording
├── curriculum.js    # 30 days of content
└── README.md
```

## What's NOT in this version (might add later)

- Self-vocabulary input ("I heard 'lead time' today, save it")
- Weekly review of error book
- Audio side-by-side: Day 1 vs Day 30 of you saying the same line
- Custom scenarios beyond Day 30

If you want any of these, ask and I'll build them.

## Daily routine (suggested)

Same time every day. 60 minutes. No exceptions for 30 days.
- 7:00 AM: open the app, do Block 1 (shadow) — coffee in hand
- 7:20 AM: Block 2 (dictation) — eyes closed during playback
- 7:40 AM: Block 3 (AI roleplay) — stand up, walk around, talk out loud like it's a real call

The talking-out-loud part is non-negotiable. You can't learn to speak by typing.

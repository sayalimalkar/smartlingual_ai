# 🌐 Smartlingual AI — Modern Language Learning Platform

Welcome to **Smartlingual AI**, an end-to-end language mastery web platform built with **React 19**, **Vite**, and modern responsive CSS.

This repository contains the complete frontend codebase with all 8 modules (Phases 1 to 8), standardized CEFR/TOPIK/JLPT level-wise curricula, native speech soundboards, interactive quizzes, and a 100-mark examination engine with AI writing evaluation.

---

## 🚀 Quick Start for Teammates

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Installation
Open your terminal inside this project folder and run:
```bash
npm install
```
*(This installs all required dependencies like React and React Router).*

### 3. Start Local Development Server
To run the website locally:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

Or double-click the included `start-website.bat` file on Windows.

### 4. Build for Production
To build the optimized production assets:
```bash
npm run build
```

---

## 📂 Project Architecture & Folder Breakdown

Here is where every component and feature is located so teammates can easily make changes:

```
Smartlingual-AI/
├── index.html                   # HTML Entry Point
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration
├── .gitignore                   # Files excluded from GitHub (node_modules, dist)
├── README.md                    # Project documentation & guide
├── start-website.bat            # One-click Windows starter script
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main router connecting all pages
    ├── index.css                # Global base styles
    ├── App.css                  # App layout styles
    │
    ├── assets/                  # Images, 3D Earth renders & student visuals
    │   ├── photorealistic-earth.jpg
    │   ├── student-solo.jpg
    │   ├── students-group.jpg
    │   └── students-tech.jpg
    │
    ├── Phase 1/                 # 🌟 Landing Page
    │   ├── Landingpage.jsx      # Hero with 3D Earth, floating language pills & CTA
    │   └── Landingpage.css      # Dark mode midnight blue & neon green styling
    │
    ├── Phase 2/                 # 🔐 Authentication
    │   ├── login.jsx & login.css
    │   └── signup.jsx & signup.css
    │
    ├── Phase 3/                 # 📊 Main Student Dashboard
    │   ├── dashboard.jsx        # Learning stats, streak counter & course shortcuts
    │   └── dashboard.css
    │
    ├── Phase 4/                 # 👤 User Profile
    │   ├── profile.jsx          # User settings, badges & target language
    │   └── profile.css
    │
    ├── Phase 5/                 # 🎓 Virtual AI Classroom
    │   ├── VirtualLearning.jsx  # Interactive video masterclasses & transcripts
    │   └── VirtualLearning.css
    │
    ├── Phase 6/                 # 📚 Standardized Curriculum & Lessons
    │   ├── curriculumData.js    # Multi-language database (German A1-C2, Korean, Japanese, English)
    │   ├── Lessons.jsx          # 15 paced lessons, 30-letter alphabet, 0-100 numbers,
    │   │                        # interactive quizzes, 100-mark exam & AI writing evaluator
    │   └── Lessons.css          # Glassmorphism soundboards, centered roadmap & quiz styles
    │
    ├── Phase 7/                 # 🎙️ Speaking Practice & Speech Lab
    │   ├── SpeakingPractice.jsx # Microphone recording & pronunciation analysis
    │   └── SpeakingPractice.css
    │
    └── Phase 8/                 # 🎯 AI Smart Recommendations
        ├── Recommendations.jsx  # Personalized practice prompts & weak-area targeting
        └── Recommendations.css
```

---

## 🛠️ Key Areas to Collaborate On

- **To adjust lesson content or add more languages/levels:**
  Edit [`src/Phase 6/curriculumData.js`](src/Phase%206/curriculumData.js).
- **To modify the lessons layout or quiz UI:**
  Edit [`src/Phase 6/Lessons.jsx`](src/Phase%206/Lessons.jsx) and [`src/Phase 6/Lessons.css`](src/Phase%206/Lessons.css).
- **To customize the dashboard:**
  Edit [`src/Phase 3/dashboard.jsx`](src/Phase%203/dashboard.jsx) and [`src/Phase 3/dashboard.css`](src/Phase%203/dashboard.css).
- **To tweak the landing page design:**
  Edit [`src/Phase 1/Landingpage.jsx`](src/Phase%201/Landingpage.jsx) and [`src/Phase 1/Landingpage.css`](src/Phase%201/Landingpage.css).

---

## 👥 Contributing Guidelines for Teammates

1. **Pull latest changes** before starting work: `git pull origin main`
2. **Never commit `node_modules`** (the `.gitignore` is already set up to protect against this).
3. Always test your changes locally using `npm run dev` before committing.
4. Run `npm run build` to verify there are zero compile or syntax errors.

# bit-by-bit ⚡

A **Next.js** monorepo for tracking and deploying all my Frontend Mentor challenges — bit by bit, one deployment at a time.

![Vercel](https://img.shields.io/badge/deployed-on-vercel-000?style=flat&logo=vercel)
![Last commit](https://img.shields.io/github/last-commit/yourname/bit-by-bit)
![License: MIT](https://img.shields.io/github/license/yourname/bit-by-bit)

---

## 📸 Demo

_Add a screenshot or GIF of your homepage showing challenge buttons._

[Live Preview](https://bit-by-bit.vercel.app)

---

## 📚 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Local Dev](#installation--local-dev)
- [Usage](#usage)
- [Workspace](#workspace)
- [Live Deployment](#live-deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## 🔍 Overview

This repo houses **all my Frontend Mentor challenges** in a single Next.js project inside the `challenges/` folder. A dynamic homepage lets me navigate each challenge without juggling repos. Everything's deployed via Vercel, so I can share a direct link like `/challenges/interactive-card`.

The `testing/` directory is used for experimenting with components, UI layouts, Zustand state management, shadcn/ui elements, and general concepts I want to test.

---

## 🧰 Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Zustand
- shadcn/ui
- Git for version control
- Vercel for continuous deployment

---

## 🗂️ Project Structure

```
/
├─ challenges/
│   ├─ challenge-one/
│   ├─ challenge-two/
│   └─ ...
├─ workspace/
│   ├─ component-tests/
│   └─ feature-sandbox/
├─ public/
├─ pages/
├─ styles/
├─ tsconfig.json
└─ next.config.js
```

---

## ⚙️ Installation & Local Dev

```bash
# Clone the repository
git clone https://github.com/AskTiba/bit-by-bit.git
cd bit-by-bit

# Install dependencies
npm install   # or yarn

# Run the development server
npm run dev

# Visit http://localhost:3000
```

---

## 👉 Usage

- On the homepage, you'll find buttons that route to individual challenges.
- Each challenge is located at: `/challenges/challenge-name`
- The `testing/` is for personal testing and component experimentation.

---

## 🧪 Testing / Experiments

The `Testing/` folder is used for:

- Testing React component composition
- Zustand store usage and patterns
- shadcn/ui integration and customization
- Responsive layout experiments
- Animation, interactivity, and performance tweaks

---

## 🚀 Live Deployment

Deployed via [Vercel](https://vercel.com):

**[bit-by-bit.vercel.app](https://bit-by-bit-sigma.vercel.app/)**

All challenges are publicly viewable through routed links — perfect for demoing.

---

## 🤝 Contributing

I welcome contributions for:

- Improving layout, responsiveness, and performance
- Refactoring or cleaning up UI components
- Fixing bugs or proposing better state/logic patterns

### How to contribute

1. Fork the repo
2. Create a branch: `git checkout -b fix/challenge-layout`
3. Commit changes and push: `git push origin fix/challenge-layout`
4. Open a Pull Request and describe your fix or enhancement

---

## 📝 License

Licensed under the [MIT License](./LICENSE).

---

## 🙏 Acknowledgements

- [Frontend Mentor](https://frontendmentor.io) – for providing free, well-designed UI challenges
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel](https://vercel.com) – for free, developer-first deployments

---

> Built with 💻, bugs, and breakthroughs — learning bit by bit.

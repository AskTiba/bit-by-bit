# bit-by-bit ⚡

A **Next.js** monorepo for tracking and deploying all my Frontend Mentor challenges — bit by bit, one deployment at a time.

<p align="center">
  
  <img src="https://img.shields.io/badge/next.js-000?style=flat&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/tailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/zustand-000?style=flat&logo=zotero&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/shadcn--ui-000?style=flat&logo=react&logoColor=white" alt="ShadCN UI" />
  <img src="https://img.shields.io/badge/open%20to-contributions-brightgreen?style=flat&logo=github" alt="Open to Contributions" />
  <img src="https://img.shields.io/github/last-commit/AskTiba/bit-by-bit" alt="Last Commit" />
  <img src="https://img.shields.io/github/license/AskTiba/bit-by-bit" alt="License" />
</p>

---

## 📸 Demo

_Add a screenshot or GIF of your homepage showing challenge buttons._

[Live Preview](https://bit-by-bit-sigma.vercel.app/)

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
├──   |app
├──   |  |challenges
├──   |  |  |tic-tac-toe
├──   |  |  |  |components
├──   |  |  |testing
├──   |  |  |  |components
├──   |  |  |expense-tracker
├──   |  |  |multi-step-form
├──   |  |  |  |lib
├──   |  |  |  |  |types
├──   |  |  |  |  |hooks
├──   |  |  |  |components
├──   |  |  |  |assets
├──   |  |  |  |  |images
├──   |  |  |  |  |design
├──   |  |  |  |  |fonts
├──   |  |  |  |docs
├──   |  |  |ecommerce-product-page
├──   |  |  |  |components
├──   |  |  |  |assets
├──   |  |  |  |  |images
├──   |  |  |  |  |design
├──   |  |  |  |docs
├── .git
├── .next
├── node_modules
├── scripts

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

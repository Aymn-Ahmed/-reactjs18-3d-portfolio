# 🎨 3D Interactive Portfolio

> A stunning 3D interactive portfolio website built with React 18, Three.js, and TypeScript.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-latest-green)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-0F172A?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

## 🌐 Live Demo

[View the live portfolio](https://reactjs18-3-d-portfolio.vercel.app/)

## 📝 Description

A fully responsive 3D portfolio website showcasing interactive 3D graphics with smooth animations. Built with React.js and Three.js for modern web experiences.

### ✨ Features

- 🎭 **Interactive 3D scenes** using Three.js and WebGL
- 📱 **Fully responsive** - works perfectly on all devices
- ⚡ **Fast performance** - optimized with Vite
- 🎨 **Beautiful UI** - built with Tailwind CSS and Framer Motion
- 📧 **Contact form** - integrated with EmailJS
- 🔍 **Type-safe** - full TypeScript support
- 🚀 **Production ready** - deployed on Vercel

## 🛠 Technologies

- **React 18** - UI framework
- **Three.js** - 3D graphics library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Email service
- **Vercel** - Hosting

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/Aymn-Ahmed/-reactjs18-3d-portfolio.git
cd -reactjs18-3d-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials

# Start dev server
npm run dev
```

### Build & Deploy

```bash
npm run build
npm run preview
```

## 📦 Project Structure

```
src/
├── components/
│   ├── atoms/
│   ├── canvas/          # 3D components
│   ├── layout/
│   └── sections/
├── constants/
├── hoc/
├── utils/
├── types/
└── assets/
```

## ⚙️ Environment Variables

Create `.env.local` with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAIL_JS_ACCESS_TOKEN=your_access_token
```

[Get your EmailJS credentials here](https://emailjs.com/)

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run ts:check` | TypeScript type checking |

## 🙏 Acknowledgments

This project is based on the React 18 3D Portfolio template and has been customized with additional features and personal touches.

- [Three.js](https://threejs.org/) - 3D library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📄 License

MIT © [Aymn-Ahmed](https://github.com/Aymn-Ahmed)

---

**Made with ❤️ by [Aymn-Ahmed](https://github.com/Aymn-Ahmed)**

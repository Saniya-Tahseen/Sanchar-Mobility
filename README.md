# SancharSathi — Electrifying Every Mile ⚡🛵

> Modern, high-performance web platform for **SancharSathi**, a smart electric scooter rental and sustainable urban mobility ecosystem.

---

## 🚀 Overview

SancharSathi provides accessible, affordable, zero-emission urban transit with swappable batteries, comprehensive commuter rentals, and business fleet solutions.

This application is built with **React 18** and **Vite**, featuring interactive 3D WebGL visualization, real-time green savings computation, and responsive design.

---

## ✨ Features

- **3D 360° Interactive Scooter Model Viewer**: Embedded Google `<model-viewer>` allowing users to interact with, rotate, and inspect the electric scooter in real time.
- **Dynamic Dual Fleet Switcher**: Switch between the **BGauss C12i** (Foliage Green) and **BGauss D15** (Crimson Red) models with synchronized camera perspectives and specifications.
- **Real-Time Green Impact Calculator**: Interactive calculator computing monthly CO₂ emissions prevented, fuel litres saved, and net financial savings based on customizable commute parameters.
- **Infinite Marquee Showcase**: Optimized CSS-animated ticker for partner networks, zero-emission milestones, and brand credentials.
- **Interactive Service Modules**: Highlights commuter daily/monthly plans, battery swapping stations, delivery fleet leasing, and franchise networks.
- **One-Touch Floating Actions**: Direct WhatsApp connectivity for instant rental inquiries and an intelligent scroll-to-top button.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **3D Engine**: [@google/model-viewer](https://modelviewer.dev/)
- **Styling**: Vanilla CSS Design Tokens (Tailwind-compatible utility architecture)
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *Noto Sans Telugu*, *Inter*)

---

## 📦 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Saniya-Tahseen/Sanchar-Mobility.git
   cd Sanchar-Mobility
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server at `http://localhost:3000`:
```bash
npm run dev
```

### Production Build

Compile and bundle the application into the optimized `dist/` directory:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 📂 Project Structure

```
Sancharsathi/
├── public/                 # Static public assets (if applicable)
├── assets/                 # Brand assets, 3D models (.glb), vector graphics
│   ├── about-us/           # About section visual media
│   ├── brand/              # Logos and store badges
│   ├── charging-platform/  # Charging hub & partner SVGs
│   └── scooter-360/        # 3D GLB model for 360 scooter interaction
├── src/
│   ├── components/         # Modular React components
│   │   ├── Header.jsx      # Sticky navbar with smooth scroll links
│   │   ├── Hero.jsx        # Hero section with 3D model-viewer
│   │   ├── Stats.jsx       # Impact & fleet statistics counters
│   │   ├── Marquee.jsx     # High-speed infinite marquee ticker
│   │   ├── Fleet.jsx       # Flagship electric fleet cards
│   │   ├── WhyUs.jsx       # Key value propositions
│   │   ├── Partners.jsx    # Believed in Us partner cards
│   │   ├── Steps.jsx       # How SancharSathi works
│   │   ├── Services.jsx    # Commuter subscription plans
│   │   ├── Business.jsx    # Enterprise & delivery fleet solutions
│   │   ├── ChargingPlatform.jsx # Hub & battery swap network
│   │   ├── ImpactCalculator.jsx # Real-time savings calculator
│   │   ├── AboutUs.jsx     # Mission, vision, & story
│   │   ├── Testimonials.jsx # Rider testimonials & reviews
│   │   ├── Cities.jsx      # Urban coverage & Warangal hub
│   │   ├── Contact.jsx     # Inquiry form and support channels
│   │   ├── Footer.jsx      # Footer links and copyright
│   │   └── FloatingActions.jsx # WhatsApp & scroll-to-top buttons
│   ├── App.jsx             # Main application orchestrator
│   ├── index.css           # Global stylesheet and design system
│   └── main.jsx            # React DOM client entry point
├── .gitignore              # Production-grade Git ignore specifications
├── index.html              # Vite HTML template
├── package.json            # Project manifest & scripts
└── vite.config.js          # Vite build & asset middleware configuration
```

---

## 📄 License

This project is licensed under the MIT License.

# DankDealerz NFT Web App

A modern NFT-themed web application built with Next.js for showcasing and managing a digital collectibles ecosystem. The app includes a landing screen, dashboard, NFT mint views, staking information, gallery, rewards, and airdrop/air page sections.

## Overview

This project presents a fictional NFT collection experience styled as a premium crypto web app. It includes:

- Intro/landing experience with animated welcome modal and video backdrop
- Dashboard with wallet NFT counts and reward statistics
- Mint section with multiple NFT cards and mint actions
- Staking page with reward tiers and token details
- Gallery for NFT collection browsing
- Rewards page describing claim tiers and perks
- Airdrop/air experience with mobile-style presentation

## Tech Stack

- Next.js 14
- React 18
- Bootstrap 5
- React Bootstrap
- Sass / SCSS
- Framer Motion
- ESLint

## Project Structure

```text
nft-web-app/
├── public/                  # Static assets, images, SVGs, videos
├── src/
│   ├── app/                # App router pages and layout
│   │   ├── air/
│   │   ├── dashboard/
│   │   ├── gallery/
│   │   ├── mint/
│   │   ├── rewards/
│   │   ├── stake/
│   │   ├── globals.scss
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── page.module.css
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom hooks
│   └── utils/              # Route helpers and utilities
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── README.md
└── ...
```

## Pages

- `/` — Landing / welcome screen
- `/dashboard` — NFT holdings and reward summary
- `/mint` — Minting cards for collection drops
- `/stake` — Staking and reward allocation interface
- `/gallery` — NFT collection gallery browser
- `/rewards` — Reward tiers and claim details
- `/air` — Airdrop-related presentation page

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Linting

```bash
npm run lint
```

## Scripts

The project includes the following scripts from `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Notes

- The project uses custom styling and assets in `public/` to create a themed NFT landing page experience.
- The design and UI are tailored for a crypto/NFT brand and contain themed graphics, rewards, and collection metadata.
- The project is implemented as a front-end showcase/demo and may be extended with real wallet integration, blockchain data, and backend APIs.

## License

This project currently does not include a custom license file. If needed, add one before publishing or distributing the project.

## Author

Project repository: `MuhammadShahab336/nft-web-app`

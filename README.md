# Powerfull (Sport Center) — React Edition

A responsive **fitness landing page** built with **React (Vite)** and **Bootstrap 5 (CSS only)**.  
Refactored from the original HTML/CSS/JS version into a **component-based React** project (each section is a separate component).

---

## Live Demo

You can try the project online here: 
- [Vercel live demo](https://sport-center-react-ten.vercel.app)

> Replace the placeholders above with your deployment URLs.

---

## Features

- **Sticky Navbar**
  - Transparent on page load, turns solid (`#355592`) on scroll
  - Mobile menu opens/closes with React state
  - Mobile menu closes after clicking a nav link
  - Section navigation via `id` + smooth scrolling

- **Our Classes**
  - Category tabs (Yoga / Group / Solo / Stretching) with active state
  - Tabs are handled with **React state** (no Bootstrap JS)

- **BMI Calculator**
  - Calculates BMI (`kg / m²`) from user input (default: **188cm / 77kg**)
  - Displays BMI value + category on the BMI scale
  - Arrow indicator moves to the correct range

- **Our Best Trainers**
  - Click-to-preview overlay (one card open at a time)

- **Contact**
  - Appointment form (handled with **FormData** on submit)
  - Live **Google Maps embed** (iframe)

---

## Getting Started

### Requirements
- Node.js (LTS recommended)
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build

```bash
npm run build
npm run preview
```

---

## Tech Stack

- React (Vite)
- Bootstrap 5 (**CSS only**)
- CSS3

---

## Folder Structure

```text
sport-center/
├── public/
│   └── assets/
│       └── img/
│           └── images...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Classes.jsx
│   │   ├── Bmi.jsx
│   │   ├── Trainers.jsx
│   │   ├── Purchase.jsx
│   │   ├── Review.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── style.css
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

---

## Notes

- This project uses **Bootstrap CSS only** (no Bootstrap JS).
- Interactive parts (Navbar menu, Classes tabs, BMI calculator, Trainers preview) are implemented with **React state**.
- Images are served from `public/assets/img` so paths can remain like:
  - `assets/img/logo.png`

---

## Thanks

This project was created with the support of **Patika.dev Fullstack Java Developer Bootcamp**.  
Special thanks to the instructors and community contributors.

---

## License

This project is currently **unlicensed**.  
You are free to use, modify, and learn from the code.

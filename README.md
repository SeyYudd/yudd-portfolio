# 🎨 Yudi's Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Yudi-f7d1de?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=flat-square&logo=framer)

**Personal portfolio website of Muhamad Syifa Wahyudi (Yudi)**  
*Software Quality Assurance Engineer*

[🌐 Live Demo](https://seyyudd.github.io/yudd-portfolio) | [📧 Contact](mailto:muhammadsyifaw98@gmail.com) | [💼 LinkedIn](https://linkedin.com/in/muhamad-syifa-wahyudi)

</div>

---

## ✨ Features

- 🌙 **Dark/Light Theme** - Toggle between dark and light modes
- 🌐 **Bilingual Support** - Indonesian (default) and English
- 🎬 **Loading Animation** - Smooth 0-100% progress loading screen
- 🪗 **Accordion Navigation** - Unique and memorable section navigation
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 🛡️ **Error Handling** - Fun and friendly error messages
- 🖼️ **Image Loading States** - Skeleton loaders for images

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |
| **GitHub Pages** | Hosting |

## 📦 Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SeyYudd/yudd-portfolio.git
   cd yudd-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

The site will be available at: `https://<your-username>.github.io/yudd-portfolio`

### Environment Variables

No environment variables are required for basic setup.

## 📁 Project Structure

```
yudd-portfolio/
├── public/
│   ├── index.html          # Main HTML with meta tags
│   ├── manifest.json       # PWA manifest
│   └── assets/
│       └── svg/            # SVG assets
├── src/
│   ├── components/
│   │   ├── About.jsx           # About section
│   │   ├── AccordionItem.jsx   # Accordion component
│   │   ├── CareerJourney.jsx   # Work experience timeline
│   │   ├── Contact.jsx         # Contact information
│   │   ├── Education.jsx       # Academic background
│   │   ├── ErrorBoundary.jsx   # Fun error handling
│   │   ├── Expertise.jsx       # Skills & expertise
│   │   ├── Hero.jsx            # Hero section
│   │   ├── ImageWithLoader.jsx # Image with loading state
│   │   ├── LanguageToggle.jsx  # Language switcher
│   │   ├── LoadingScreen.jsx   # Loading animation
│   │   ├── Projects.jsx        # Projects showcase
│   │   └── ThemeToggle.jsx     # Theme switcher
│   ├── context/
│   │   └── AppContext.jsx      # Global state & translations
│   ├── App.js              # Main app component
│   ├── App.css             # App styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles & Tailwind
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies & scripts
└── README.md               # This file
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  accent: {
    DEFAULT: '#f7d1de',  // Main accent color
    light: '#fce8ef',    // Light variant
    dark: '#e8b4c4',     // Dark variant
  },
}
```

### Add New Language

Edit `src/context/AppContext.jsx` and add translations to the `translations` object.

### Modify Sections

Each section is a separate component in `src/components/`. Edit or add components as needed.

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for personal use.

## 👨‍💻 About Me

**Muhamad Syifa Wahyudi (Yudi)**

- 🎓 Computer Science Graduate - Binus University (2022)
- 💼 Software Quality Assurance Engineer
- 📧 [muhammadsyifaw98@gmail.com](mailto:muhammadsyifaw98@gmail.com)
- 💼 [LinkedIn](https://linkedin.com/in/muhamad-syifa-wahyudi)
- 🐙 [GitHub](https://github.com/SeyYudd)

### Work Experience

| Company | Role | Period |
|---------|------|--------|
| PT Steradian Data Optima | SQA Engineer | May 2025 - Present |
| PT NTT Indonesia Technology | SQA | Feb 2024 - Jan 2025 |
| PT Sumber Trijaya Lestari | Product Operation | Feb 2020 - Feb 2021 |

---

<div align="center">

Made with ❤️ by Yudi

⭐ Star this repo if you find it helpful!

</div>

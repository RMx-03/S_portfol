# Minimal Bold Developer Portfolio

A stunning, production-ready developer portfolio built with TypeScript, React, and Tailwind CSS. Features a minimalistic black theme with modern typography, smooth animations, and excellent performance.

## ✨ Features

- **Modern Design**: Minimalistic black theme with subtle noise texture and neon accents
- **Floating Navigation**: Innovative dock-style navigation with smooth scroll-to sections
- **Command Palette**: Keyboard shortcuts (`/` key) for quick navigation
- **Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: GPU-accelerated animations with reduced motion support
- **Accessible**: WCAG AA compliant with proper keyboard navigation
- **SEO Ready**: Open Graph meta tags and JSON-LD structured data

## 🚀 Tech Stack

- **Frontend**: TypeScript, React 18, Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion with performance optimizations
- **Fonts**: Space Grotesk (display) + Inter (body text)
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page sections (Hero, About, etc.)
│   └── navigation/         # Navigation components
├── context/
│   └── ResumeContext.tsx   # Resume data context
├── data/
│   └── resume.ts           # Resume data structure
├── hooks/                  # Custom React hooks
├── lib/
│   └── seo.ts             # SEO utilities
└── styles/
    └── globals.css         # Global styles and theme
```

## 🎨 Design System

- **Colors**: Custom black/charcoal theme with neon accent (#c6f36b)
- **Typography**: Space Grotesk for headings, Inter for body text
- **Spacing**: 8px grid system for consistent layouts
- **Components**: Rounded-2xl cards with soft shadows
- **Animations**: 200-650ms transitions with reduced motion support

## 🛠️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Customization

### Updating Resume Data

Edit `src/data/resume.ts` to update your personal information:

```typescript
export const resumeData: ResumeData = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your value proposition",
  // ... rest of your data
};
```

### Theme Customization

Update colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      accent: '#your-accent-color',
    }
  }
}
```

### Adding New Sections

1. Create component in `src/components/sections/`
2. Add to `src/App.tsx`
3. Update `sectionIds` array for navigation

## 🎯 Performance Features

- **Code Splitting**: Lazy loading with React.lazy()
- **Image Optimization**: Lazy loading with proper aspect ratios
- **Animation Optimization**: GPU-accelerated transforms
- **Reduced Motion**: Respects user preferences
- **Font Loading**: Optimized with `font-display: swap`

## 📱 Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and landmarks
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Animation preferences respected

## 🔧 SEO Features

- **Meta Tags**: Dynamic title, description, and keywords
- **Open Graph**: Social media preview optimization
- **JSON-LD**: Structured data for search engines
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using modern web technologies
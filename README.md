
# Modern Portfolio & Interactive CV

A modern, responsive portfolio website built with React 18, TypeScript, Tailwind CSS, and Framer Motion. Features dark/light mode, internationalization (EN/ES), and smooth animations.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for professional animations
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Dark/Light Mode**: Persistent theme switching
- **Internationalization**: Support for English and Spanish
- **SEO Optimized**: React Helmet for meta tags and SEO
- **Interactive Components**: Skill filters, project gallery, contact form
- **Performance**: Optimized builds and lazy loading

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS Variables
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Internationalization**: react-i18next
- **SEO**: React Helmet Async
- **Icons**: Lucide React
- **Form Handling**: Native React state
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-cv
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Customization Guide

### 1. Personal Information
Edit `src/data/portfolio.json` to update:
- Personal details (name, title, bio, contact)
- Skills and experience levels
- Work experience and achievements
- Project showcase
- Testimonials

### 2. Theme Colors
Modify `tailwind.config.ts` to change:
- Primary colors (blue theme)
- Accent colors (orange theme)
- Tech-specific colors
- Custom spacing and fonts

### 3. Internationalization
Add/edit translations in:
- `src/i18n/locales/en.json` (English)
- `src/i18n/locales/es.json` (Spanish)

### 4. Images and Assets
Replace placeholder images in:
- Profile photo: Update `avatar` path in portfolio.json
- Company logos: Update `logo` paths in experience section
- Project screenshots: Update `image` paths in projects section

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── ui/              # Base UI components
│   ├── Navigation.tsx   # Main navigation
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills grid
│   ├── Experience.tsx   # Timeline
│   ├── Projects.tsx     # Project gallery
│   ├── Testimonials.tsx # Testimonials
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── data/                # JSON data files
│   └── portfolio.json   # Main portfolio data
├── hooks/               # Custom hooks
│   └── useTheme.ts      # Theme management
├── i18n/                # Internationalization
│   ├── index.ts         # i18n configuration
│   └── locales/         # Translation files
├── pages/               # Page components
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 page
└── lib/                 # Utilities
    └── utils.ts         # Helper functions
```

## 🌟 Key Features Explained

### Skills Grid
- Interactive filtering by technology category
- Animated progress bars showing proficiency levels
- Color-coded technology badges
- Hover effects and smooth transitions

### Experience Timeline
- Responsive timeline layout
- Alternating left/right positioning on desktop
- Company logos and achievement highlights
- Technology stack badges

### Project Gallery
- Filterable project grid
- Featured project highlighting
- Performance metrics display
- Demo and code links

### Contact Form
- Functional contact form with validation
- Toast notifications for feedback
- Responsive design with contact information cards

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect the settings
3. Deploy!

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Adjusted layouts for medium screens
- **Desktop**: Full-featured experience with animations
- **Large Screens**: Optimized for wide displays

## ⚡ Performance

- **Vite**: Fast build tool and HMR
- **Code Splitting**: Automatic code splitting
- **Lazy Loading**: Optimized image loading
- **Minimal Bundle**: Tree-shaking and optimization
- **Modern JS**: ES6+ features for better performance

## 🔧 Environment Variables

Create a `.env` file for any API keys or configuration:

```env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

## 📞 Support

For questions or issues:
- Create an issue in the repository
- Contact: alex.rodriguez@example.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS**

# Musfika Rahman Bushra - Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and shadcn/ui components.

## Features

- **Modern Design**: Glass morphism effects with gradient backgrounds
- **Responsive Layout**: Optimized for all device sizes
- **Component-Based**: Modular React components for easy maintenance
- **TypeScript**: Type-safe development
- **shadcn/ui**: Beautiful, accessible UI components
- **Smooth Scrolling**: Seamless navigation between sections

## Sections

- **Hero**: Introduction with profile image and social links
- **About**: Personal background and interests
- **Skills**: Technical skills organized by category
- **Education & Experience**: Academic and professional background
- **Projects**: Featured project showcase with interactive cards
- **Contact**: Contact information with icons

## Tech Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Material Icons Outlined
- **Fonts**: Poppins from Google Fonts

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Navigation.tsx       # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Education.tsx        # Education & Experience
│   ├── Projects.tsx         # Projects showcase
│   ├── Contact.tsx          # Contact information
│   └── Footer.tsx           # Footer component
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

- **Colors**: Update the purple theme in `globals.css` and component files
- **Content**: Modify the content in each component file
- **Images**: Replace placeholder images with actual project screenshots
- **Links**: Update social media and project links
- **Contact Info**: Update contact details in the Contact component

## Deployment

This project can be deployed on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static hosting service

## License

This project is open source and available under the MIT License.
# Thiyagarajan V - Portfolio

A modern, production-ready React portfolio website showcasing my work as an Aspiring AI Engineer and Python Full Stack Developer.

## Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Multi-Page Navigation**: Seamless client-side routing with scroll-to-top on page change
- **Light Theme**: Clean, professional design with excellent readability
- **Sections**:
  - Home: Introduction and overview
  - About: Professional summary and education
  - Projects: Detailed project showcases
  - Skills: Technical skills with proficiency levels
  - Certifications: Professional certifications with images
  - Blog: Technical articles and insights
  - Contact: Contact form and social links

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push to main branch

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. If deploying to username.github.io/repo-name, update vite.config.ts:
```typescript
base: '/repo-name/'
```

5. Deploy:
```bash
npm run deploy
```

## Project Structure

```
src/
├── components/       # Reusable components (Header, Footer)
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   └── Contact.tsx
├── router.tsx       # Custom routing logic
├── App.tsx          # Main app component
└── main.tsx         # Entry point

public/
├── images/          # Images and photos
└── documents/       # Certificates and resume
```

## Customization

### Adding New Projects

Edit `src/pages/Projects.tsx` and add your project to the `projects` array.

### Adding Blog Posts

Edit `src/pages/Blog.tsx` to add new posts to the `blogPosts` array.

### Updating Personal Information

- **Contact info**: Edit `src/components/Footer.tsx` and `src/pages/Contact.tsx`
- **About content**: Edit `src/pages/About.tsx`
- **Skills**: Edit `src/pages/Skills.tsx`

## Contact

- **Email**: thiyagu2004nanni@gmail.com
- **GitHub**: [thiyagu200426](https://github.com/thiyagu200426)
- **LinkedIn**: [Thiyagarajan V](https://www.linkedin.com/in/thiyagarajan-v-9b3b34373/)

## License

This project is open source and available for personal use.

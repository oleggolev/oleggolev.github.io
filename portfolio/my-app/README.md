# Oleg Golev - Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Deployed automatically to GitHub Pages.

## Live Site

**[https://oleggolev.github.io/portfolio](https://oleggolev.github.io/portfolio)**

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom animations
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (static export)

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create static export
npm run build
```

This generates a static site in the `out/` directory, ready for GitHub Pages deployment.

## GitHub Pages Deployment

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Repository Settings

1. Go to **Settings** → **Pages** in your GitHub repository
2. Under "Build and deployment", set **Source** to **GitHub Actions**
3. Save the settings

### Deployment Workflow

The site automatically deploys when you push to the `main` branch. The workflow:

1. Checks out the repository
2. Sets up Node.js 18
3. Installs dependencies with `npm ci`
4. Builds the static export with `next build`
5. Deploys to GitHub Pages

### Manual Deployment

To deploy manually from your local machine:

```bash
# Build the static site
npm run build

# The out/ directory contains the deployable files
# GitHub Actions handles the actual deployment automatically
```

### Site Configuration

The site is configured for deployment at `https://oleggolev.github.io/portfolio`. 

If you fork this repository and deploy to your own GitHub Pages:

1. Update `next.config.ts`:
   ```typescript
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name/',
   ```

2. Update the repository name in `.github/workflows/deploy.yml`:
   ```yaml
   - name: Deploy to GitHub Pages
     uses: peaceiris/actions-gh-pages@v3
     with:
       github_token: ${{ secrets.GITHUB_TOKEN }}
       publish_dir: ./out
   ```

3. Update this README with your repository URL

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public/` directory with your domain
2. Update DNS records to point to GitHub Pages
3. Remove `basePath` and `assetPrefix` from `next.config.ts`
4. Update the GitHub Actions workflow to copy the CNAME file to the output

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main portfolio page
│   ├── layout.tsx         # Root layout with fonts & metadata
│   └── globals.css        # Global styles & Tailwind
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── shared/           # Shared components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── AboutSection.tsx  # About section
│   ├── ResearchSection.tsx
│   ├── ProjectsSection.tsx
│   ├── FunSystemsSection.tsx
│   ├── MiscSection.tsx
│   └── ScrollTracker.tsx # Scroll depth tracking
├── lib/                   # Utility functions
│   └── utils.ts          # cn() helper for Tailwind
├── public/               # Static assets
│   ├── images/          # Portfolio images
│   └── files/           # PDFs and downloadable files
├── .github/workflows/    # GitHub Actions
│   └── deploy.yml       # Deployment workflow
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies
```

## Features

- **Responsive Design**: Mobile-first with breakpoints for all devices
- **Smooth Scroll Navigation**: Sticky header with active section highlighting
- **Scroll Tracking**: Analytics integration for user engagement
- **Static Export**: Optimized for GitHub Pages hosting
- **SEO Optimized**: Proper metadata and semantic HTML
- **Fast Performance**: Static generation with optimized assets

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this as a template for your own portfolio!

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Components from [shadcn/ui](https://ui.shadcn.com/)

# Personal Portfolio

A clean, minimalist researcher portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui patterns (CVA, Radix UI primitives)
- **Icons**: Lucide React
- **Font**: Barlow (Google Fonts)
- **Hosting**: GitHub Pages (automated deployment)
- **Custom Domain**: oleggolev.com

## Project Structure

```
/
├── .github/workflows/      # GitHub Actions deployment workflow
│   └── deploy.yml
├── public/                 # Static assets (images, PDFs)
│   ├── images/            # Project images, profile photo
│   └── files/             # PDF papers and documents
├── src/
│   ├── app/               # Application entry points
│   │   ├── main.tsx      # React entry point
│   │   └── App.tsx       # Root component
│   ├── components/
│   │   ├── layout/       # Layout components (Header, Footer, SectionContainer)
│   │   └── ui/           # Reusable UI primitives (Button, Card, Badge, Separator)
│   ├── features/          # Feature-based modules
│   │   ├── about/components/AboutSection.tsx
│   │   ├── research/components/ResearchSection.tsx
│   │   ├── projects/components/ProjectsSection.tsx
│   │   ├── fun-systems/components/FunSystemsSection.tsx
│   │   └── misc/components/MiscSection.tsx
│   ├── hooks/            # Custom React hooks
│   │   └── useScrollTracker.ts
│   ├── lib/              # Utilities and helpers
│   │   └── utils.ts      # cn() function, GA tracking
│   └── styles/
│       └── globals.css   # Global styles and Tailwind imports
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Build static site
npm run build

# Preview production build locally
npm run preview

# Open browser to http://localhost:4173
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally

## Deployment

### Automatic Deployment (Recommended)

The site deploys automatically to GitHub Pages on every push to the `main` branch:

```bash
# Make your changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Actions will:
1. Install dependencies (`npm ci`)
2. Build the site (`npm run build`)
3. Deploy to GitHub Pages

**Live URLs:**
- GitHub Pages: `https://oleggolev.github.io`
- Custom Domain: `https://oleggolev.com`

### Custom Domain Setup

The site is configured to work with both GitHub Pages URL and custom domain:

1. **DNS Configuration** (already done):
   - A records pointing to GitHub Pages IPs
   - Or CNAME record pointing to `oleggolev.github.io`

2. **Repository Settings**:
   - Go to Settings → Pages
   - Custom domain: `oleggolev.com`
   - Enforce HTTPS: ✓ (recommended)

3. **CNAME File**:
   - The `CNAME` file in repository root contains `oleggolev.com`
   - This file is automatically copied to `dist/` during build

**Note:** Both URLs work simultaneously. The custom domain is primary, but the GitHub Pages URL remains accessible as a fallback.

### Manual Deployment (If Needed)

If you need to deploy manually without GitHub Actions:

```bash
# Build locally
npm run build

# The dist/ folder now contains the static site
# You can copy these files to any static hosting provider

# To deploy to GitHub Pages manually:
# 1. Enable GitHub Pages in repo settings
# 2. Set source to "Deploy from a branch"
# 3. Select "main" branch and "/ (root)" folder
```

### First-Time GitHub Pages Setup

If this is the first deployment:

1. **Enable GitHub Pages:**
   - Repository → Settings → Pages
   - Source: Select "GitHub Actions"

2. **Verify Workflow Permissions:**
   - Settings → Actions → General
   - Workflow permissions: Select "Read and write permissions"

3. **Push to main:**
   ```bash
   git push origin main
   ```

4. **Wait 1-2 minutes**, then visit:
   - `https://oleggolev.com` (custom domain)
   - `https://oleggolev.github.io` (GitHub Pages)

## Troubleshooting

### Build Failures

**Error: "Cannot find module"**
- Run `npm install` to ensure dependencies are installed
- Check that `package-lock.json` is committed

**Error: TypeScript compilation fails**
- Check `tsconfig.json` for correct paths
- Ensure all imports use `@/` alias correctly

### Deployment Issues

**Site not updating after push:**
1. Check Actions tab for build status
2. Clear browser cache (Cmd+Shift+R or Ctrl+F5)
3. Try incognito/private browsing mode
4. Check that custom domain DNS is configured

**Assets not loading (404 errors):**
- Ensure images are in `public/images/` (not `src/`)
- Check that files are referenced with absolute paths (`/images/...`)
- Verify `vite.config.ts` has correct `base: '/'`

**Custom domain not working:**
- Verify CNAME file exists and contains correct domain
- Check DNS records are configured correctly
- Ensure "Enforce HTTPS" is enabled in settings
- Wait for DNS propagation (can take up to 24 hours)

### Local Development Issues

**Port already in use:**
```bash
npm run dev -- --port 3000  # Use different port
```

**Hot reload not working:**
- Check browser console for errors
- Restart dev server: `Ctrl+C`, then `npm run dev`

## Design Features

- **Minimalist Researcher Aesthetic**: Clean layout inspired by academic portfolio sites
- **Sticky Navigation**: Header stays visible while scrolling with active section highlighting
- **Research Cards**: Standardized card sizes with image overlays
- **Responsive Grid**: Projects display in a responsive grid layout
- **Color-coded Tags**: Visual category indicators with colored dots
- **Smooth Animations**: Fade-in effects and hover transitions
- **Google Analytics**: Built-in tracking for engagement metrics

## Content Updates

All content is stored in the feature component files as data arrays:

- **Papers**: Edit `src/features/research/components/ResearchSection.tsx` - `PAPERS` array
- **Projects**: Edit `src/features/projects/components/ProjectsSection.tsx` - `PROJECTS` array
- **Fun Systems**: Edit `src/features/fun-systems/components/FunSystemsSection.tsx` - `SYSTEMS_PROJECTS` array
- **Misc**: Edit `src/features/misc/components/MiscSection.tsx` - `CATEGORIES` array

After editing, commit and push:
```bash
git add .
git commit -m "Update research papers"
git push origin main
```

The site will automatically redeploy.

## Adding Assets

### Images
1. Add image files to `public/images/`
2. Reference in code: `src="/images/filename.png"`
3. Supported formats: PNG, JPG, WebP

### PDFs/Documents
1. Add files to `public/files/`
2. Reference in code: `href="/files/document.pdf"`
3. Link with `target="_blank"` for external viewing

## Development Guidelines

See `AGENTS.md` for detailed code style guidelines, including:
- Import conventions and path aliases
- Component structure patterns
- TypeScript best practices
- Tailwind CSS usage
- Naming conventions

## License

MIT License - feel free to use this template for your own portfolio!

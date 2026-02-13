# Personal Portfolio

A clean, minimalist researcher portfolio website built with React, Next.js, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Barlow (Google Fonts)
- **Hosting**: GitHub Pages (automated deployment)

## Project Structure

```
/
├── .github/workflows/      # GitHub Actions deployment workflow
│   └── deploy.yml
├── portfolio/my-app/       # Next.js application source
│   ├── app/               # Next.js app router
│   │   ├── layout.tsx    # Root layout with Barlow font
│   │   ├── page.tsx      # Main page composing all sections
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ResearchSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── MiscSection.tsx
│   │   └── Footer.tsx
│   ├── components/ui/    # shadcn/ui components
│   ├── public/           # Static assets (images, PDFs)
│   ├── lib/
│   ├── next.config.ts    # Next.js static export config
│   └── package.json
└── README.md
```

## Development

```bash
# Navigate to project
cd portfolio/my-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production locally
npm run build
```

## GitHub Pages Deployment

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup (One-time)

1. **Enable GitHub Pages in repository settings:**
   - Go to Settings > Pages
   - Source: Select "GitHub Actions"

2. **Ensure the workflow has correct permissions:**
   - Go to Settings > Actions > General
   - Workflow permissions: Select "Read and write permissions"

### How Deployment Works

The `.github/workflows/deploy.yml` workflow automatically:
1. Triggers on every push to `main` or `master`
2. Builds the Next.js app with static export
3. Deploys to GitHub Pages

### Manual Deployment

To deploy manually (if you want to push static files instead):

```bash
# Build locally
cd portfolio/my-app
npm run build

# Copy dist/ contents to repo root
cp -r dist/* ../../

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

### Configuration Details

**Next.js Config** (`portfolio/my-app/next.config.ts`):
- `output: 'export'` - Generates static HTML
- `distDir: 'dist'` - Output directory
- `images.unoptimized: true` - Required for static export
- No `basePath` needed (user site serves from root)

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
- Uses Node.js 20
- Runs in `portfolio/my-app` working directory
- Caches npm dependencies
- Deploys from `portfolio/my-app/dist`

### Troubleshooting

**Build fails in GitHub Actions:**
- Check that `portfolio/my-app/package-lock.json` is committed
- Verify Node.js version compatibility (using 20)

**Assets not loading:**
- Ensure `next.config.ts` doesn't have incorrect `basePath` or `assetPrefix`
- Check browser console for 404 errors

**Site not updating:**
- Check Actions tab for deployment status
- Clear browser cache or try incognito mode
- Verify GitHub Pages source is set to "GitHub Actions"

## Design Features

- **Minimalist Researcher Aesthetic**: Clean layout inspired by academic portfolio sites
- **Sticky Navigation**: Header stays visible while scrolling with active section highlighting
- **Research Filtering**: Filter papers by category (blockchain, ML, systems, embedded)
- **Responsive Grid**: Projects display in a responsive grid layout
- **Color-coded Tags**: Visual category indicators with colored dots
- **Smooth Animations**: Hover effects and transitions throughout

## Sections

1. **About**: Profile photo, social links, bio
2. **Research**: Filterable paper cards with thumbnails, tags, and PDF links
3. **Projects**: Grid of project cards with descriptions and links
4. **Misc**: Additional projects, coursework, and experience
5. **Footer**: Contact information

## Content Updates

All content is stored in the component files as data arrays:
- Papers: Edit `ResearchSection.tsx` papers array
- Projects: Edit `ProjectsSection.tsx` projects array
- Misc items: Edit `MiscSection.tsx` misc array

After editing, commit and push - the site will automatically redeploy.

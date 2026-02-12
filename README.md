# Personal Portfolio

A clean, minimalist researcher portfolio website built with React, Next.js, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Barlow (Google Fonts)

## Project Structure

```
portfolio/my-app/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with Barlow font
│   ├── page.tsx           # Main page composing all sections
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Sticky navigation header
│   ├── AboutSection.tsx   # Profile and bio section
│   ├── ResearchSection.tsx # Research papers with filters
│   ├── ProjectsSection.tsx # Projects grid
│   ├── ExperienceSection.tsx # Experience timeline
│   ├── CourseworkSection.tsx # Coursework list
│   └── Footer.tsx         # Site footer
├── components/ui/         # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   └── separator.tsx
├── public/               # Static assets
│   ├── images/          # Profile photos, project images
│   └── files/           # PDFs and documents
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
├── next.config.ts       # Next.js config for static export
└── package.json
```

## Development

```bash
# Navigate to project
cd portfolio/my-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

The site is configured for GitHub Pages static hosting:

1. Run `npm run build` in the `portfolio/my-app` directory
2. The build output goes to `portfolio/my-app/dist/`
3. Copy the contents of `dist/` to the repository root
4. Push to GitHub - the site will be live at https://oleggolev.github.io

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
4. **Experience**: Timeline of work experience (placeholder content)
5. **Coursework**: Academic projects with language/technology tags

## Content

All content is stored in the component files as data arrays. To update:
- Papers: Edit `ResearchSection.tsx` papers array
- Projects: Edit `ProjectsSection.tsx` projects array
- Coursework: Edit `CourseworkSection.tsx` coursework array
- Experience: Edit `ExperienceSection.tsx` experiences array

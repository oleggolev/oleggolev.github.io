# AGENTS.md

## Project Overview

Static portfolio website built with HTML5, CSS3, jQuery, and Bootstrap. No build tools or package managers - just open `index.html` in a browser.

## Commands

### Development

No build step required. To preview locally:

```bash
# Python 3 (recommended)
python3 -m http.server 8000

# Node.js
npx serve

# Or open directly
open index.html
```

### Validation

```bash
# Validate HTML (requires tidy)
tidy -q -e index.html

# Validate CSS (requires csslint)
csslint css/style.css

# Check links (requires htmltest or similar)
# Manual testing: verify all links work in browser
```

### Testing

No automated test suite. Test manually:
1. Open in Chrome, Firefox, Safari
2. Test responsive design at: 320px, 426px, 768px, 1024px
3. Verify all navigation links scroll correctly
4. Check external links open in new tab
5. Test PDF downloads work

### Image Optimization

```bash
# Use ImageMagick to optimize before adding to repo
convert input.jpg -quality 85 -resize 1200x output.jpg

# Or use tinypng.com for PNGs
```

## Code Style Guidelines

### HTML

- Use HTML5 doctype: `<!DOCTYPE html>`
- Indent with 4 spaces
- Use lowercase for tags and attributes
- Use double quotes for attribute values
- Include `lang="en"` on `<html>` tag
- Close all tags (even void elements with `/`)
- Organize sections with clear comments: `<!-- SECTION NAME -->`
- Use semantic HTML5 elements (`<section>`, `<nav>`, `<footer>`)

### CSS

- Use kebab-case for class names (e.g., `.section-1-inner-col`)
- Indent with 4 spaces
- Use 1 space after colons in property declarations
- Group related properties together
- Use lowercase hex colors with 6 characters when possible
- Media queries at end of related sections
- Comment major sections: `/* SECTION NAME */`
- Prefer relative units (`rem`, `%`, `vh/vw`) for responsiveness

### JavaScript

- Use jQuery for DOM manipulation (already included)
- Use camelCase for variable names
- Prefer single quotes for strings
- Indent with 4 spaces
- Use strict equality (`===`) over loose equality

### File Organization

```
/
├── index.html          # Main portfolio page
├── reference.html      # Reference/minified page
├── css/
│   └── style.css       # All styles
├── js/
│   └── nav.js          # Navigation functionality
├── images/             # All images
└── files/              # PDFs and downloadable files
```

### External Dependencies

Loaded via CDN (do not modify):
- Bootstrap 5.1.3 (CSS + JS)
- Font Awesome 4.7.0
- Bootstrap Icons 1.8.1
- jQuery 3.4.1 (slim)
- Popper.js

### Naming Conventions

- **HTML IDs**: kebab-case with descriptive names (`#nav-logo`, `#collapsibleNavbar`)
- **CSS Classes**: kebab-case, prefixed with section number when applicable (`.section-1-inner`, `.sec6-btn`)
- **Files**: Use lowercase with hyphens (`sec6-image-right.jpg`)

### Responsive Design

- Mobile-first approach with breakpoints:
  - 320px (small phones)
  - 426px (phones)
  - 768px (tablets)
  - 1024px (small laptops)
- Use Bootstrap grid system (`col-sm-6`, `col-lg-6`, etc.)

### Content Guidelines

- Academic/professional tone
- Use `<b>` with inline styles for emphasis: `<b style='color:#ff8f00 !important;'>`
- Link to GitHub repos with `target="_blank"`
- PDF downloads should have `download` attribute with filename
- Include alt text for all images

### Git Workflow

- No automated testing or CI/CD
- Commit directly to main or create feature branches
- Use descriptive commit messages
- Keep images optimized (no massive files in repo)

### Security

- Include integrity hashes for CDN resources
- Use `crossorigin="anonymous"` for CDN scripts
- No sensitive data in repository

### Common Tasks

```bash
# Add a new project section
# 1. Copy existing section-6-inner block
# 2. Update image paths and content
# 3. Add responsive images to images/ folder

# Update profile image
# Replace images/profile.png with new image (keep same dimensions)

# Add new paper PDF
# Place in files/ folder, link with download attribute
```

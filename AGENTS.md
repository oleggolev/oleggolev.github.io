# AGENTS.md

## Project Overview

Modern React 19 + TypeScript portfolio built with Vite, Tailwind CSS, and shadcn/ui patterns. Deployed to GitHub Pages via automated workflow.

**Tech Stack:** React 19, TypeScript 5.6, Vite 6, Tailwind CSS 3, Lucide React

## Commands

### Development
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing (Once Vitest is added)
```bash
# Run all tests
npm test

# Run single test file
npm test -- src/components/Button.test.tsx

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Linting (Once ESLint is added)
```bash
# Lint all files
npm run lint

# Lint and fix
npm run lint:fix

# Format with Prettier
npm run format
```

## Code Style Guidelines

### Imports & Path Aliases
- Use `@/` prefix for all src imports: `import { Button } from '@/components/ui/Button'`
- Group imports: React/hooks → Components → Utils → Types
- Named exports for components, hooks, utilities
- Default export only for page/App components

### File Naming Conventions
- **Components:** PascalCase files (`Button.tsx`, `AboutSection.tsx`)
- **Hooks:** camelCase with `use` prefix (`useScrollTracker.ts`)
- **Utils:** camelCase (`utils.ts`, `helpers.ts`)
- **Directories:** kebab-case (`fun-systems/`, `components/ui/`)

### TypeScript Patterns
- Use `interface` for component props
- Use `type` for unions, tuples, complex types
- Export props interfaces: `export interface ButtonProps`
- Use `React.ReactNode` for children
- Use `as const` for constant arrays
- Global declarations in `declare global` blocks

### Component Structure
```tsx
// Forward ref pattern for UI components
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// Regular functional components
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}
```

### Naming Conventions
- **Variables/Functions:** camelCase (`handleClick`, `activeSection`)
- **Constants:** UPPER_SNAKE_CASE (`TAG_COLORS`, `PAPERS`)
- **Components:** PascalCase (`AboutSection`, `Button`)
- **Types/Interfaces:** PascalCase with descriptive names
- **Boolean props:** Prefix with `is`, `has`, `should` (`isOpen`, `hasError`)

### Error Handling
- Type guards for window objects: `if (typeof window !== 'undefined')`
- Optional chaining for potentially undefined values
- Default parameter values instead of null checks
- No explicit try-catch needed (static site, no APIs)

### Styling (Tailwind CSS)
- Use `cn()` utility for conditional classes
- Use CVA (class-variance-authority) for variant components
- Mobile-first responsive design
- Custom colors via tailwind.config.js
- Animation utilities for fade-in effects
- Arbitrary values sparingly: `text-[10px]`, `w-[7px]`

### File Organization
```
src/
├── app/                    # Entry points
├── components/
│   ├── ui/                # Reusable primitives (Button, Card)
│   └── layout/            # Layout components (Header, Footer)
├── features/
│   ├── about/
│   ├── research/
│   └── ...                # Feature-based folders
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities (cn, tracking)
└── styles/                # Global CSS
```

### Component Patterns
- Use `React.forwardRef` for UI primitives
- Set `displayName` on forwarded components
- Compose with children prop
- Use shadcn/ui patterns (variants, cn utility)
- Keep components focused and single-purpose

### Content Guidelines
- Academic/professional tone
- External links use `target="_blank" rel="noopener noreferrer"`
- PDFs go in `public/files/`, images in `public/images/`
- Use semantic HTML (`<section>`, `<nav>`, `<article>`)
- Include alt text for all images

## Testing Approach

### Unit Testing (Vitest)
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### E2E Testing (Playwright)
```bash
# Test navigation flows
npx playwright test
```

## Deployment

**GitHub Actions** automatically deploys on push to main:
1. Installs dependencies with `npm ci`
2. Builds with `npm run build`
3. Deploys `dist/` folder to GitHub Pages

**Manual deployment:**
```bash
npm run build
# Commit and push - Actions handles the rest
```

## Common Tasks

### Add new research paper
1. Add image to `public/images/`
2. Add PDF to `public/files/`
3. Update `ResearchSection.tsx` papers array
4. Test link opens correctly

### Add new UI component
1. Create in `src/components/ui/ComponentName.tsx`
2. Use forwardRef + displayName pattern
3. Use CVA for variants if needed
4. Export from file

### Update Tailwind config
1. Edit `tailwind.config.js`
2. Add colors, animations, or extend theme
3. Restart dev server to see changes
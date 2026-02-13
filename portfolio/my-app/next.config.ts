import type { NextConfig } from "next";

/**
 * GitHub Pages Configuration
 * 
 * This app is configured for deployment to GitHub Pages.
 * - basePath: Set to '/portfolio' for deployment to https://oleggolev.github.io/portfolio
 * - assetPrefix: Ensures assets load correctly from the subdirectory
 * - output: 'export' creates a static site suitable for GitHub Pages
 * 
 * To customize for your own GitHub Pages site:
 * 1. Update basePath to match your repository name (e.g., '/my-repo')
 * 2. Update your GitHub repository settings to enable Pages from GitHub Actions
 */

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

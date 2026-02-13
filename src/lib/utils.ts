import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Google Analytics tracking
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

export const trackPaperClick = (title: string, venue: string) => 
  trackEvent('paper_click', { paper_title: title, paper_venue: venue });

export const trackProjectClick = (title: string, type: 'paper' | 'code' | 'blog') => 
  trackEvent('project_click', { project_title: title, click_type: type });

export const trackLinkClick = (name: string, url: string) => 
  trackEvent('link_click', { link_name: name, link_url: url });

export const trackSocialClick = (platform: string) => 
  trackEvent('social_click', { social_platform: platform });

export const trackCardClick = (name: string, section: string) => 
  trackEvent('card_click', { card_name: name, section });

export const trackVideoPlay = (title: string, category: string) => 
  trackEvent('video_play', { video_title: title, video_category: category });

export const trackScrollDepth = (depth: number) => 
  trackEvent('scroll_depth', { depth_percentage: depth });

export const trackSectionView = (section: string) => 
  trackEvent('section_view', { section_name: section });
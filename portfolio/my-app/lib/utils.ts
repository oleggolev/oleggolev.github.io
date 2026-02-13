import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Google Analytics tracking utility
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any> | undefined
    ) => void;
    dataLayer: any[];
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

export function trackPageView(pagePath: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-MMWRV3J22Z', {
      page_path: pagePath,
    });
  }
}

export function trackPaperClick(paperTitle: string, venue: string) {
  trackEvent('paper_click', {
    event_category: 'engagement',
    event_label: paperTitle,
    paper_title: paperTitle,
    paper_venue: venue,
  });
}

export function trackProjectClick(projectTitle: string, type: 'paper' | 'code') {
  trackEvent('project_click', {
    event_category: 'engagement',
    event_label: `${projectTitle} - ${type}`,
    project_title: projectTitle,
    click_type: type,
  });
}

export function trackLinkClick(linkName: string, url: string) {
  trackEvent('link_click', {
    event_category: 'navigation',
    event_label: linkName,
    link_url: url,
  });
}

export function trackSocialClick(platform: string) {
  trackEvent('social_click', {
    event_category: 'social',
    event_label: platform,
    social_platform: platform,
  });
}

export function trackCardClick(cardName: string, section: string) {
  trackEvent('card_click', {
    event_category: 'engagement',
    event_label: cardName,
    card_name: cardName,
    section: section,
  });
}

export function trackVideoPlay(videoTitle: string, category: string) {
  trackEvent('video_play', {
    event_category: 'engagement',
    event_label: videoTitle,
    video_title: videoTitle,
    video_category: category,
  });
}

export function trackScrollDepth(depth: number) {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    depth_percentage: depth,
  });
}

export function trackSectionView(sectionName: string) {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
    section_name: sectionName,
  });
}

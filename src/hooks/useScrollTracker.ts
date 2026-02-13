import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackSectionView } from '@/lib/utils';

const SECTIONS = ['about', 'research', 'projects', 'fun-systems', 'misc'];

export function useScrollTracker() {
  const scrollTrackedRef = useRef<Set<number>>(new Set());
  const sectionsViewedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      const thresholds = [25, 50, 75, 90, 100];
      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !scrollTrackedRef.current.has(threshold)) {
          scrollTrackedRef.current.add(threshold);
          trackScrollDepth(threshold);
        }
      });

      SECTIONS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > 0;
          
          if (isVisible && !sectionsViewedRef.current.has(sectionId)) {
            sectionsViewedRef.current.add(sectionId);
            trackSectionView(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
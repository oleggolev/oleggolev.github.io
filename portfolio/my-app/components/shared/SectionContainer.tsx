"use client";

import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  delay?: number;
}

export function SectionContainer({ 
  children, 
  id, 
  className,
  delay = 0 
}: SectionContainerProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-8 px-4 sm:px-8 lg:px-16 opacity-0-init animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}

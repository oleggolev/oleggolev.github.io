"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "about", href: "#about" },
  { label: "research", href: "#research" },
  { label: "projects", href: "#projects" },
  { label: "fun systems", href: "#fun-systems" },
  { label: "misc", href: "#misc" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[rgb(249,249,249)] transition-all duration-500">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-end">
        <nav>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "text-base transition-colors duration-300 hover:text-[#0eb5ff]",
                    activeSection === item.href.replace("#", "")
                      ? "font-bold text-black"
                      : "font-normal text-black"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

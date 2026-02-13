import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'about', href: '#about' },
  { label: 'research', href: '#research' },
  { label: 'projects', href: '#projects' },
  { label: 'fun systems', href: '#fun-systems' },
  { label: 'misc', href: '#misc' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[rgb(249,249,249)] transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-end">
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    'text-base transition-colors duration-300 hover:text-[#0eb5ff]',
                    activeSection === item.href.replace('#', '')
                      ? 'font-bold text-black'
                      : 'font-normal text-black'
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[rgb(249,249,249)] border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      'block text-lg transition-colors duration-300 hover:text-[#0eb5ff] py-2',
                      activeSection === item.href.replace('#', '')
                        ? 'font-bold text-black'
                        : 'font-normal text-black'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
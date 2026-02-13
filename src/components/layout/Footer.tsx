import { SectionContainer } from './SectionContainer';

export function Footer() {
  return (
    <SectionContainer id="footer" className="bg-[#f9f9f9] text-center" delay={500}>
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Oleg Golev. Built with React, Tailwind CSS, and Vite.
      </p>
    </SectionContainer>
  );
}
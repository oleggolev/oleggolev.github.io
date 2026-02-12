import { SectionContainer } from "./shared/SectionContainer";

export function Footer() {
  return (
    <SectionContainer id="footer" className="bg-[#f9f9f9] text-center" delay={500}>
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Oleg Golev. Built with Next.js, shadcn/ui, OpenCode.AI, and Kimi-K2.5.
      </p>
    </SectionContainer>
  );
}

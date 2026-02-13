import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FunSystemsSection } from "@/components/FunSystemsSection";
import { MiscSection } from "@/components/MiscSection";
import { Footer } from "@/components/Footer";
import { ScrollTracker } from "@/components/ScrollTracker";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollTracker />
      <main>
        <AboutSection />
        <ResearchSection />
        <ProjectsSection />
        <FunSystemsSection />
        <MiscSection />
      </main>
      <Footer />
    </div>
  );
}

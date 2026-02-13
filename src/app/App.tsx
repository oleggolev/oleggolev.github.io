import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutSection } from '@/features/about/components/AboutSection';
import { ResearchSection } from '@/features/research/components/ResearchSection';
import { ProjectsSection } from '@/features/projects/components/ProjectsSection';
import { FunSystemsSection } from '@/features/fun-systems/components/FunSystemsSection';
import { MiscSection } from '@/features/misc/components/MiscSection';
import { useScrollTracker } from '@/hooks/useScrollTracker';

function App() {
  useScrollTracker();

  return (
    <div className="min-h-screen bg-white">
      <Header />
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

export default App;
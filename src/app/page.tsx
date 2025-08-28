import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { AiAssistantButton } from '@/components/ai-assistant-button';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <AiAssistantButton />
    </div>
  );
}

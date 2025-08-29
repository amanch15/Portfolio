import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { EducationSection } from '@/components/education-section';
import { CertificationsSection } from '@/components/certifications-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { ExperienceSection } from '@/components/experience-section';
import { AnimatedSection } from '@/components/animated-section';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background dark:bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AnimatedSection>
          <SkillsSection />
        </AnimatedSection>
        <AnimatedSection>
          <EducationSection />
        </AnimatedSection>
        <AnimatedSection>
          <CertificationsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ExperienceSection />
        </AnimatedSection>
        <AnimatedSection>
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

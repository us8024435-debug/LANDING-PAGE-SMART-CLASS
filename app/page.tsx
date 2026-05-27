import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedVideoSection from '@/components/FeaturedVideoSection';
import PhilosophySection from '@/components/PhilosophySection';
import ServicesSection from '@/components/ServicesSection';
import TeacherJourneySection from '@/components/TeacherJourneySection';
import TechStackSection from '@/components/TechStackSection';
import StudentJourneySection from '@/components/StudentJourneySection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';
import { SafeSectionWrapper } from '@/components/SafeSectionWrapper';

export default async function Page() {
  return (
    <main className="bg-black text-white relative min-h-screen flex flex-col font-sans select-none overflow-x-hidden">
      <HeroSection />
      
      <SafeSectionWrapper>
        <AboutSection />
      </SafeSectionWrapper>

      <SafeSectionWrapper>
        <FeaturedVideoSection />
      </SafeSectionWrapper>

      <SafeSectionWrapper>
        <PhilosophySection />
      </SafeSectionWrapper>

      <SafeSectionWrapper>
        <ServicesSection />
      </SafeSectionWrapper>

      <SafeSectionWrapper>
        <TeacherJourneySection />
      </SafeSectionWrapper>

      <SafeSectionWrapper>
        <TechStackSection />
      </SafeSectionWrapper>

      <SafeSectionWrapper>
        <StudentJourneySection />
      </SafeSectionWrapper>

      <SafeSectionWrapper>
        <CTASection />
      </SafeSectionWrapper>

      <SafeSectionWrapper>
        <FooterSection />
      </SafeSectionWrapper>
    </main>
  );
}

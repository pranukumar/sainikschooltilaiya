import Hero from '@/components/home/Hero';
import NewsTicker from '@/components/home/NewsTicker';
import PrincipalMessage from '@/components/home/PrincipalMessage';
import StatsCounter from '@/components/home/StatsCounter';
import WhySST from '@/components/home/WhySST';
import Achievements from '@/components/home/Achievements';
import SchoolPledge from '@/components/home/SchoolPledge';
import GalleryPreview from '@/components/home/GalleryPreview';
import AlumniSpotlight from '@/components/home/AlumniSpotlight';
import AdmissionCTA from '@/components/home/AdmissionCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NewsTicker />
      <PrincipalMessage />
      <StatsCounter />
      <WhySST />
      <Achievements />
      <SchoolPledge />
      <GalleryPreview />
      <AlumniSpotlight />
      <AdmissionCTA />
    </main>
  );
}

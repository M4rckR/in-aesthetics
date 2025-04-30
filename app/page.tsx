import { Benefits } from '@/components/bennefits/Benefits';
import { HeroLaserTreatment } from '@/components/heroLaserTreatment/HeroLaserTreatment';
import { HeroOfferts } from '@/components/heroOfferts/HeroOfferts';
import { Questions } from '@/components/questions/Questions';
import { CtaTreatmentWsp } from '@/components/ctaTreatmentWsp/CtaTreatmentWsp';
import { Testimonials } from '@/components/testimonials/Testimonials';
import 'lenis/dist/lenis.css'

export default function Home() {
  return (
    <main className="grow">
      <HeroOfferts/>
      <HeroLaserTreatment/>
      <Benefits/>
      <Testimonials/>
      <Questions/>
      <CtaTreatmentWsp/>
    </main>
  );
}

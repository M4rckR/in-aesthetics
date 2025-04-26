import { Benefits } from '@/components/bennefits/Benefits';
import { HeroLaserTreatment } from '@/components/heroLaserTreatment/HeroLaserTreatment';
import { HeroOfferts } from '@/components/heroOfferts/HeroOfferts';
import 'lenis/dist/lenis.css'

export default function Home() {
  return (
    <main className="grow">
      <HeroOfferts/>
      <HeroLaserTreatment/>
      <Benefits/>
    </main>
  );
}

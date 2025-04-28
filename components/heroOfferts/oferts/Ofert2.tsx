import Image from "next/image"
import { useInhaesteticsData } from "@/store/InhaesteticsData"

export const Ofert2 = () => {
  const { openDialog } = useInhaesteticsData();
  return (
    <article className="relative h-[300px] md:h-[400px] lg:h-[600px] ">
        <div className="max-w-[1200] flex items-center mx-auto px-4 h-full">
            <div className="max-w-[420px] md:max-w-[620px] h-full flex flex-col items-start justify-center space-y-6">
                <h1 className="font-in-playfair text-2xl sm:text-3xl lg:text-5xl text-in-brown font-medium">Transformación 360°</h1>
                <div className="text-in-brown-light md:text-lg md:space-y-2 text-sm">
                    <p>1 sesión de (Criolipólisis + Exilis Ultra)</p>
                    <p>+ Consulta <span className="font-medium">médica + evaluación corporal</span> </p>
                    <p>+ BONO: Asesoría nutricional personalizada</p>
                </div>
                <a onClick={openDialog} className="py-2 md:py-3 px-8 md:px-14 bg-in-brown inline-block rounded-4xl text-white" href="#">Agendar cita</a>
            </div>
        </div>
        <Image
            alt="chica sin lunares"
            src="/images/hero_ofert_2.png"
            width={820}
            height={400}
            className="absolute bottom-0 -right-44 -z-10 w-96 md:-right-44 lg:-right-0  sm:w-[360px]  md:w-[500px] lg:w-[740px]"
        />
    </article>
  )
}

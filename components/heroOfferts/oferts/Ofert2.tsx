import Image from "next/image"

export const Ofert2 = () => {
  return (
    <article className="relative">
        <div className="max-w-[1200] mx-auto px-4">
            <div className="max-w-[620px] h-full flex flex-col items-start justify-center py-46 space-y-6">
                <h1 className="font-in-playfair text-5xl text-in-brown font-medium">Transformación 360°</h1>
                <div className="text-in-brown-light text-lg space-y-2">
                    <p>1 sesión de (Criolipólisis + Exilis Ultra)</p>
                    <p>+ Consulta <span className="font-medium">médica + evaluación corporal</span> </p>
                    <p>+ BONO: Asesoría nutricional personalizada</p>
                </div>
                <a className="py-3 px-10 bg-in-brown inline-block rounded-4xl text-white" href="#">Agendar cita</a>
            </div>
        </div>
        <Image
            alt="chica sin lunares"
            src="/images/hero_ofert_2.png"
            width={820}
            height={400}
            className="absolute -top-10 right-0"
        />
    </article>
  )
}

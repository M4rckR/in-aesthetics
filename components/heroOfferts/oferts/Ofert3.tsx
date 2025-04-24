import Image from "next/image"

export const Ofert3 = () => {
  return (
    <article className="relative">
        <div className="max-w-[1200] mx-auto px-4">
            <div className="max-w-[620px] h-full flex flex-col items-start justify-center py-46 space-y-6">
                <h1 className="font-in-playfair text-5xl text-in-brown font-medium">Silueta Perfecta</h1>
                <div className="text-in-brown-light text-lg space-y-2">
                    <p>1 sesión de (Criolipolisis + Emsculp)</p>
                    <p>+ Consulta médica<span className="font-medium"> + evaluación corporal</span> </p>
                </div>
                <a className="py-3 px-10 bg-in-brown inline-block rounded-4xl text-white" href="#">Agendar cita</a>
            </div>
        </div>
        <Image
            alt="chica sin lunares"
            src="/images/hero_ofert_3.png"
            width={780}
            height={400}
            className="absolute -top-10 -right-7"
        />
    </article>
  )
}

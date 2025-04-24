import Image from "next/image"

export const Ofert1 = () => {
  return (
    <article className="relative w-full">
        <div className="max-w-[1200] mx-auto px-4">
            <div className="max-w-[620px] h-full flex flex-col items-start justify-center space-y-10 py-48">
                <h1 className="font-in-playfair text-5xl text-in-title-base">Despídete de{' '}
                    <span className="text-in-brown font-semibold">
                        lunares, verrugas y acrocordones {' '}
                    </span> 
                de forma segura y sin cicatrices</h1>
                <a className="py-3 px-10 bg-in-brown inline-block rounded-4xl text-white" href="#">Agendar cita</a>
            </div>
        </div>
        <Image
            alt="chica sin lunares"
            src="/images/hero_ofert_1.png"
            width={530}
            height={400}
            className="absolute -top-10 right-12"
        />
    </article>
  )
}

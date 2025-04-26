import Image from "next/image"

export const Benefits = () => {
  return (
    <section className="h-screen relative my-16">
      <div className="container mx-auto max-w-[1200px] h-full relative">
        {/* Círculo central con título */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-in-pink py-44 w-[200px] rounded-full relative">
            <h2 className='text-in-title-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-in-playfair font-medium'>
              Beneficios y <br /> Características
            </h2>
          </div>
        </div>

        {/* Beneficio Superior Izquierdo */}
        <div className="absolute top-20 left-20 flex flex-col items-center w-56">
          <Image 
            src="/images/beneficio1.png" 
            alt="Beneficios y Características" 
            width={200}
            height={200}
            className="object-cover w-full"
          />
          <p className="text-center w-full text-in-brown font-medium mt-1">Sin cicatrices ni dolor</p>
        </div>

        {/* Beneficio Superior Derecho */}
        <div className="absolute top-20 right-20 flex flex-col items-center w-72">
          <Image 
            src="/images/beneficio2.png"  
            alt="Beneficios y Características" 
            width={200}
            height={200}
            className="object-cover w-full"
          />
          <p className="text-center w-full text-in-brown font-medium mt-1">Eliminación definitiva</p>
        </div>

        {/* Beneficio Inferior */}
        <div className="absolute bottom-12 left-3/12 -translate-x-3/12 flex flex-col items-center w-72">
          <Image 
            src="/images/beneficio3.png" 
            alt="Beneficios y Características" 
            width={200}
            height={200}
            className="object-cover w-full"
          />
          <p className="text-center w-full text-in-brown font-medium mt-1">Procedimiento seguro y preciso</p>
        </div>

        {/* Beneficio Inferior derecho*/}
        <div className="absolute bottom-0 right-40 flex flex-col items-center w-60">
          <Image 
            src="/images/beneficio4.png" 
            alt="Beneficios y Características" 
            width={200}
            height={200}
            className="object-cover w-full"
          />
          <p className="text-center w-full text-in-brown font-medium mt-1">Resultados inmediatos</p>
        </div>
      </div>
    </section>
  )
}

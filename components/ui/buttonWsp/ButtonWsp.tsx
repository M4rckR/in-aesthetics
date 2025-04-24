import Image from "next/image"

export const ButtonWsp = () => {
    return (
      <div className="container max-w-[1200] mx-auto relative">
          <a className="fixed bottom-1/12 w-12 h-12 right-0 z-50  rounded-full shadow-lg transition-transform duration-300 hover:scale-105 bg-in-brown flex justify-center items-center" href="" target="_blank"> 
             <Image
                alt="icono whatsapp"
                src="/icons/button_wsp.svg"
                width={24}
                height={24}
             />
          </a>
      </div>
      
    )
  }
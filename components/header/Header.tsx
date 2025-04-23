import Image from "next/image"

export const Header = () => {
  return (
    <div>
        <header className="max-w-[1440px] mx-auto py-4 px-4">
            <div className="flex items-center justify-between">
                <Image 
                    priority 
                    src="/logos/marca.png" 
                    alt="logo inaesthetics" 
                    width={274}
                    height={79}
                    className="w-36 md:w-56"
                    // placeholder="blur"
                />
                <div className="flex gap-4">
                    <a href="#">
                      <Image
                        priority
                        src="/icons/instagram.svg"
                        alt="icono instagram"
                        width={25}
                        height={25}
                        className="w-6 md:w-8"
                      />
                    </a>
                    <a href="#">
                      <Image
                        priority
                        src="/icons/tiktok.svg"
                        alt="icono instagram"
                        width={25}
                        height={25}
                        className="w-6 md:w-8"
                      />
                    </a>
                    <a href="#">
                      <Image
                        priority
                        src="/icons/facebook.svg"
                        alt="icono instagram"
                        width={25}
                        height={25}
                        className="w-6 md:w-8"
                      />
                    </a>
                </div>
            </div>
        </header>
    </div>
  )
}

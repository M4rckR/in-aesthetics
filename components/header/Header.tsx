import Image from "next/image"
import { Socialbar } from "../socialBar/Socialbar"

export const Header = () => {
  return (
    <div>
        <header className="max-w-[1440px] mx-auto container py-4 px-4">
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
                <Socialbar 
                  size={28} 
                  gap={24}
                />
            </div>
        </header>
    </div>
  )
}

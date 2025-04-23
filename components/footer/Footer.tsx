import Image from 'next/image'
import React from 'react'
import { Socialbar } from '../socialBar/Socialbar'

export const Footer = () => {
  return (
    <footer 
        className='bg-in-pink py-14 rounded-tl-[48px] rounded-tr-[48px] md:rounded-tl-[58px] md:rounded-tr-[58px]'
        >
        <div className='container max-w-[1440px] mx-auto px-4 space-y-8'>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='space-y-4 flex flex-col items-center md:items-start'> 
                    <Image
                    src ="/logos/logo_small.png"
                    alt ="logo inaesthetics"
                    width={48}
                    height={48}
                    /> 
                    <h3 
                        className='text-center md:text-left font-in-playfair text-2xl md:text-3xl lg:text-4xl md:max-w-[440px]'
                    >Recupera la belleza de tu piel con un procedimiento rápido y seguro.</h3>
                </div>
                <div className='space-y-2 md:pt-16 text-center md:text-left'>
                    <p>Av. Sánchez Carrión 615, oficina 1005 - Jesús María</p>
                    <p>999 999 999</p>
                    <div className='flex justify-center md:justify-start'>
                        <Socialbar gap={24} size={28}/>
                    </div>
                </div>
            </div>
            <div className='md:flex text-center gap-10 text-sm'>
                <p>Copyright © Inaesthetics 2025</p>
                <p>Created by Insalud</p>
            </div>
        </div>
    </footer>
  )
}

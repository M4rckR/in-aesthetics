
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Ofert1 } from './oferts/Ofert1';
import { Ofert2 } from './oferts/Ofert2';
import { Ofert3 } from './oferts/Ofert3';



export const HeroOfferts = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-[#FFECE3]/0 to-[#FFECE3]">
      <Swiper
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true} 
          autoHeight={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          effect="fade" 
          allowTouchMove={false}    
          className="w-full"
          >
          {[Ofert1, Ofert2, Ofert3].map((Comp, i) => (
          <SwiperSlide key={i} className="w-full h-full">
            <div className="relative w-full h-full">
              <Comp />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

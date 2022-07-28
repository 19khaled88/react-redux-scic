import React from 'react';
// import { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import slider10 from '../assets/slider-phone-10.jpg';
import slider11 from '../assets/slider-phone-11.jpg';
import slider12 from '../assets/slider-phone-12.jpg';
import slider4 from '../assets/slider-phone-4.jpg';
import slider6 from '../assets/slider-phone-6.png';
import slider7 from '../assets/slider-phone-7.jpg';
const banner =[
        slider10,
        slider11,
        slider12,
        slider4,
        slider6,
        slider7
]
const Text = [
    {
      id: 1,
      title: "Sunset",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, non commodi.",
    },
    {
      id: 2,
      title: "Sunrise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, non commodi.",
    },
    {
      id: 3,
      title: "Moon Light",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, non commodi.",
    },
  ];

const Banner = () => {
  return (
    <div>
        <Swiper
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y,EffectFade]} 
        className="mySwiper"
        effect='fade'
        centeredSlides={true}
        spaceBetween={10}
        // slidesPerView={1}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
         navigation={true}
         pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >

        {
            banner.map((i, el)=>{
               return  <SwiperSlide><img  src={i} alt={i} /></SwiperSlide>
            
               
            })
        }

        {/*<SwiperSlide><img className='home-Slider' src={slider10} alt={slider10} /></SwiperSlide>
        <SwiperSlide><img className='home-Slider' src={slider11} alt={slider11} /></SwiperSlide>
        <SwiperSlide><img className='home-Slider' src={slider12} alt={slider12} /></SwiperSlide>
        <SwiperSlide><img className='home-Slider'v src={slider4} alt={slider4} /></SwiperSlide>
        <SwiperSlide><img className='home-Slider' src={slider10} alt={slider6} /></SwiperSlide>
        <SwiperSlide><img className='home-Slider' src={slider10} alt={slider7} /></SwiperSlide>*/}
        </Swiper>
    </div>
  );
}

export default Banner;

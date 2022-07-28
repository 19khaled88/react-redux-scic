import React from 'react';
import Slider from 'react-slick';

import slider10 from '../assets/slider-phone-10.jpg';
import slider11 from '../assets/slider-phone-11.jpg';
import slider12 from '../assets/slider-phone-12.jpg';
import slider4 from '../assets/slider-phone-4.jpg';
import slider6 from '../assets/slider-phone-6.png';
import slider7 from '../assets/slider-phone-7.jpg';


const BannerSliide = () => {
  const settings ={
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:5000,
    
    // pauseOnHover:false,
    // cssEase:'linear'

  }
  return (
    <div >
      <Slider {...settings}>
        <div>
          <img className='home-Slider' src={slider10} alt={slider10} />
        </div>
        <div>
          <img className='home-Slider' src={slider11} alt={slider11} />
        </div>
        <div>
          <img className='home-Slider' src={slider12} alt={slider12} />
        </div>
        <div>
          <img className='home-Slider' src={slider4} alt={slider4} />
        </div>
        <div>
          <img className='home-Slider' src={slider6} alt={slider6} />
        </div>
        <div>
          <img className='home-Slider' src={slider7} alt={slider7} />
        </div>
      </Slider>
    </div>
  )
}

export default BannerSliide
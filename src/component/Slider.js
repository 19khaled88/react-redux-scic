import React from 'react';
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Parallax, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import { animate } from 'motion';
import Radium, { StyleRoot } from 'radium';
import { bounce, fadeInRightBig, fadeInUpBig } from 'react-animations';
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

const styles ={
  bounce:{
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  fadeInRightBig:{
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRightBig, 'fadeInRightBig')
  },
  fadeInUpBig:{
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig')
  }
}




const Slider = () => {

  return (
    <div>
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        parallax={true}
        modules={[Parallax,Autoplay,Navigation, Pagination, Scrollbar, A11y,EffectFade]} 
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
        onSlideChange={() => {
          const swp = document.getElementsByClassName('swiper-slide-active')[0]
               
            const sw = swp.getElementsByClassName('title')[0]
           
            // animate(sw,{ backgroundColor: "green" })
        //  console.log( swp[0].getElementsByClassName('title')[0])
          // swp[0].getElementsByClassName('text')[0].innerHTML
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide style={{position:'relative'}}>
          <img className='home-Slider' src={slider10} alt={slider10} />
       
              <StyleRoot>
                <div style={{position:'absolute', top:'150px'}}>
                  <h5 className="title" data-swiper-parallax="-1500" data-swiper-parallax-duration="600">Slide 1</h5>
                  <h4  className="subtitle" data-swiper-parallax="-1500" data-swiper-parallax-duration="600"> Subtitle-1</h4>
                  <p className="text" data-swiper-parallax="-1500" data-swiper-parallax-duration="600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  </p>
                </div>
              </StyleRoot>
            
          
          {/*<StyleRoot>
          <div style={{position:'absolute', top:'150px'}}>
            <h5 className="title" data-swiper-parallax="-1500" data-swiper-parallax-duration="600">Slide 1</h5>
            <h4 style={styles.fadeInUpBig} className="subtitle" data-swiper-parallax="-1500" data-swiper-parallax-duration="600"> Subtitle-1</h4>
            <p className="text" style={styles.fadeInRightBig} data-swiper-parallax="-1500" data-swiper-parallax-duration="600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            </p>
          </div>
          </StyleRoot>*/}


        </SwiperSlide>
        <SwiperSlide>
        <img className='home-Slider' src={slider11} alt={slider11} />  
        <StyleRoot>
        <div style={{position:'absolute', top:'150px'}}>
          <h5 style={styles.fadeInRightBig} className="title" data-swiper-parallax="-1500" data-swiper-parallax-duration="1000">Slide 2</h5>
          <h4 style={styles.fadeInRightBig}  className="subtitle" data-swiper-parallax="-1500" data-swiper-parallax-duration="1000"> Subtitle-2</h4>
          <p style={styles.fadeInRightBig} className="text"  data-swiper-parallax="-1500" data-swiper-parallax-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          </p>
        </div>
        </StyleRoot>
        
        </SwiperSlide>
        <SwiperSlide>
        <img className='home-Slider' src={slider12} alt={slider12} />
        <StyleRoot>
        <div style={{position:'absolute', top:'150px'}}>
          <h5 className="title" data-swiper-parallax="-1500" data-swiper-parallax-duration="1000">Slide 3</h5>
          <h4  className="subtitle" data-swiper-parallax="-1500" data-swiper-parallax-duration="1000"> Subtitle-3</h4>
          <p className="text"  data-swiper-parallax="-1500" data-swiper-parallax-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          </p>
        </div>
        </StyleRoot>
        
        </SwiperSlide>
        <SwiperSlide>
        <img className='home-Slider'v src={slider4} alt={slider4} />
        <StyleRoot>
        <div style={{position:'absolute', top:'150px'}}>
          <h5 className="title" data-swiper-parallax="-1500" data-swiper-parallax-duration="1000">Slide 4</h5>
          <h4  className="subtitle" data-swiper-parallax="-1500" data-swiper-parallax-duration="1000"> Subtitle-4</h4>
          <p className="text"  data-swiper-parallax="-1500" data-swiper-parallax-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          </p>
        </div>
        </StyleRoot>
        </SwiperSlide>
        <SwiperSlide>
        <img className='home-Slider' src={slider10} alt={slider6} />
        <StyleRoot>
        <div style={{position:'absolute', top:'150px'}}>
          <h5 className="title" data-swiper-parallax="-1500" data-swiper-parallax-duration="1000">Slide 5</h5>
          <h4  className="subtitle" data-swiper-parallax="-1500" data-swiper-parallax-duration="1000"> Subtitle-5</h4>
          <p className="text"  data-swiper-parallax="-1500" data-swiper-parallax-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          </p>
        </div>
        </StyleRoot>
        
        </SwiperSlide>
        <SwiperSlide>
        <img className='home-Slider' src={slider10} alt={slider7} />
        <StyleRoot>
        <div style={{position:'absolute', top:'150px'}}>
          <h5 className="title" data-swiper-parallax="-1500" data-swiper-parallax-duration="1000">Slide 7</h5>
          <h4 style={styles.fadeInUpBig} className="subtitle" data-swiper-parallax="-1500" data-swiper-parallax-duration="1000"> Subtitle-7</h4>
          <p className="text" style={styles.fadeInRightBig} data-swiper-parallax="-1500" data-swiper-parallax-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          </p>
        </div>
        </StyleRoot>
        </SwiperSlide>
        </Swiper>
    </div>
  );
}

export default Slider;

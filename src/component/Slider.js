import React from 'react'
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// import { animate } from 'motion';
import Radium, { StyleRoot } from 'radium'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import slider15 from '../assets/slider-phone-15.jpg'
import slider11 from '../assets/slider-phone-11.jpg'
import slider12 from '../assets/slider-phone-12.jpg'
import slider4 from '../assets/slider-phone-4.jpg'
import slider6 from '../assets/slider-phone-6.png'
import slider16 from '../assets/slider-phone-16.jpg'

const Slider = () => {
  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        parallax={true}
        modules={[
          Parallax,
          Autoplay,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
        ]}
        className="mySwiper"
        effect="fade"
        centeredSlides={true}
        spaceBetween={10}
        // slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pauseOnHover={true}
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
        <SwiperSlide style={{ position: 'relative' }}>
          <img className="home-Slider" src={slider4} alt={slider4} />

          <div
            style={{
              position: 'absolute',
              top: '150px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <h2
              className="title animated bounceInRight"
              data-swiper-parallax="-1500"
              style={{ animationDelay: '1s' }}
              data-swiper-parallax-duration="600"
            >
              <span style={{ color: 'red' }}> Buy one</span>,
              <span style={{ color: 'yellow' }}> Get one</span>
            </h2>
            <h4
              className="subtitle animated bounceInLeft d-none d-md-block"
              style={{ animationDelay: '2s', color: 'white' }}
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="600"
            >
              {' '}
              Don't do late, Or you miss the chance
            </h4>
            <button
              className="text animated bounceInUbutton d-none d-md-block"
              style={{
                animationDelay: '2s',
                margin: '0 auto',
                border: 'none',
                borderRadius: '50px',
                padding: '2px 15px 2px 15px',
                backgroundColor: 'orange',
              }}
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="600"
            >
              Buy now <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>

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
          <img className="home-Slider" src={slider6} alt={slider6} />

          <div
            style={{
              position: 'absolute',
              top: '150px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <h3
              className="title"
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              <span style={{ color: 'red' }}> Hot</span> deal
            </h3>
            <h4
              className="subtitle"
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              {' '}
              <span style={{ color: 'orange' }}> Chance comes once</span>
            </h4>
            <button
              style={{
                animationDelay: '3s',

                margin: '0 auto',
                border: 'none',
                borderRadius: '50px',
                padding: '2px 15px 2px 15px',
                backgroundColor: 'orange',
              }}
              className="text "
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              Click, Buy<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="home-Slider" src={slider11} alt={slider11} />

          <div
            style={{
              position: 'absolute',
              top: '150px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <h3
              className="title"
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              <span style={{ color: 'red' }}> Offers</span> goes daily
            </h3>
            <h4
              className="subtitle"
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              {' '}
              <span style={{ color: 'orange' }}>
                {' '}
                Don't try tomorrow, Try today
              </span>
            </h4>
            <button
              style={{
                animationDelay: '3s',

                margin: '0 auto',
                border: 'none',
                borderRadius: '50px',
                padding: '2px 15px 2px 15px',
                backgroundColor: 'orange',
              }}
              className="text "
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              Click, Buy<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="home-Slider" v src={slider12} alt={slider12} />

          <div
            style={{
              position: 'absolute',
              top: '150px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <h3
              className="title"
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              <span style={{ color: 'red' }}> Offers</span> goes daily
            </h3>
            <h4
              className="subtitle"
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              {' '}
              <span style={{ color: 'orange' }}>
                {' '}
                Don't try tomorrow, Try today
              </span>
            </h4>
            <button
              style={{
                animationDelay: '3s',

                margin: '0 auto',
                border: 'none',
                borderRadius: '50px',
                padding: '2px 15px 2px 15px',
                backgroundColor: 'orange',
              }}
              className="text "
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              Click, Buy<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="home-Slider" src={slider15} alt={slider15} />

          <div
            style={{
              position: 'absolute',
              top: '150px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <h3
              className="title"
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              <span style={{ color: 'red' }}> Offers</span> goes daily
            </h3>
            <h4
              className="subtitle"
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              {' '}
              <span style={{ color: 'orange' }}>
                {' '}
                Don't try tomorrow, Try today
              </span>
            </h4>
            <button
              style={{
                animationDelay: '3s',

                margin: '0 auto',
                border: 'none',
                borderRadius: '50px',
                padding: '2px 15px 2px 15px',
                backgroundColor: 'orange',
              }}
              className="text "
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              Click, Buy<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="home-Slider" src={slider16} alt={slider16} />

          <div
            style={{
              position: 'absolute',
              top: '150px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <h4
              className="title"
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              <span style={{ color: 'red' }}> Offers</span> goes daily
            </h4>
            <h4
              className="subtitle"
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              {' '}
              <span style={{ color: 'orange' }}>
                {' '}
                Don't try tomorrow, Try today
              </span>
            </h4>
            <button
              style={{
                animationDelay: '3s',

                margin: '0 auto',
                border: 'none',
                borderRadius: '50px',
                padding: '2px 15px 2px 15px',
                backgroundColor: 'orange',
              }}
              className="text "
              data-swiper-parallax="-1500"
              data-swiper-parallax-duration="1000"
            >
              Click, Buy<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider

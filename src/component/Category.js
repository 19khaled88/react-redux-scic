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
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'
import '../css/category.css'
import opp01 from '../assets/oppo/A16-productlist-black-427x600-v2.png.thumb.png'
const Category = () => {
  return (
    <section className="category-product">
      <div className="section-title text-center">
        <h2>Category Products</h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        pauseOnHover={false}
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
      >
        <div className="row">
          <SwiperSlide>
            <div className="">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <img src={opp01} alt={opp01} />
                  <h4>Oppo</h4>
                  <div className="buy-details">
                    <a href="#" className="view-all-btn">
                      Details
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <img src={opp01} alt={opp01} />
                  <h4>Oppo</h4>
                  <div className="buy-details">
                    <a href="#" className="view-all-btn">
                      Details
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <img src={opp01} alt={opp01} />
                  <h4>Oppo</h4>
                  <div className="buy-details">
                    <a href="#" className="view-all-btn">
                      Details
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <img src={opp01} alt={opp01} />
                  <h4>Oppo</h4>
                  <div className="buy-details">
                    <a href="#" className="view-all-btn">
                      Details
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <img src={opp01} alt={opp01} />
                  <h4>Oppo</h4>
                  <div className="buy-details">
                    <a href="#" className="view-all-btn">
                      Details
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <img src={opp01} alt={opp01} />
                  <h4>Oppo</h4>
                  <div className="buy-details">
                    <a href="#" className="view-all-btn">
                      Details
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <img src={opp01} alt={opp01} />
                  <h4>Oppo</h4>
                  <div className="buy-details">
                    <a href="#" className="view-all-btn">
                      Details
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <img src={opp01} alt={opp01} />
                  <h4>Oppo</h4>
                  <div className="buy-details">
                    <a href="#" className="view-all-btn">
                      Details
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <img src={opp01} alt={opp01} />
                  <h4>Oppo</h4>
                  <div className="buy-details">
                    <a href="#" className="view-all-btn">
                      Details
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  )
}

export default Category

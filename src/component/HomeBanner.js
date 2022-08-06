import React from 'react'
import slider10 from '../assets/slider-phone-10.jpg'
import slider11 from '../assets/slider-phone-11.jpg'
import slider12 from '../assets/slider-phone-12.jpg'
import slider4 from '../assets/slider-phone-4.jpg'
import slider6 from '../assets/slider-phone-6.png'
import slider7 from '../assets/slider-phone-7.jpg'
const HomeBanner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider10} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: '1s' }}
              >
                First slide label
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider11} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: '1s' }}
              >
                Second slide label
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider12} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: '1s' }}
              >
                Third slide label
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider4} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: '1s' }}
              >
                Forth slide label
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider6} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: '1s' }}
              >
                Fifth slide label
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider7} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: '1s' }}
              >
                Sixth slide label
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Some representative placeholder content for the first slide.
              </p>
              <p
                className="animated bounceInUp d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default HomeBanner

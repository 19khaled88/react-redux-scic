import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slider10 from '../assets/slider-phone-10.jpg';
import slider11 from '../assets/slider-phone-11.jpg';
import slider12 from '../assets/slider-phone-12.jpg';
import slider4 from '../assets/slider-phone-4.jpg';
import slider6 from '../assets/slider-phone-6.png';
import slider7 from '../assets/slider-phone-7.jpg';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const BannerSliide = () => {
  return (
    <div>
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={ true }
    autoPlaySpeed={400}
    keyBoardControl={true}
    customTransition="all .9"
    transitionDuration={3000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    <div><img src={slider11 }  alt=''/></div>
    <div><img src={slider4 }  alt=''/></div>
    <div><img src={slider6 }  alt=''/></div>
    <div><img src={slider7 }  alt=''/></div>
    <div><img src={slider10 }  alt=''/></div>
    <div><img src={slider12 }  alt=''/></div>
   
  </Carousel>;
    </div>
  )
}

export default BannerSliide
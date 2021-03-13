import './mainbanner.scss'
import {useState} from 'react'
import Slider from "react-slick"

const banner_list = [
  '/images/main-banner1.jpg',
  '/images/main-banner2.jpg',
  '/images/main-banner3.jpg',
]


export default function MainBanner () {
  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    lazyLoad: true,
  };
  
  return (
    <div className='main-banner-box'>
      <Slider className='slider-box' {...settings}>
        {banner_list.map((banner) => {
          return (
              <img src={banner} className="banner-img"/>
          )})
        }
      </Slider>
    </div>
  )
}
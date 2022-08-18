import React from 'react'
import Slider from 'react-slick'

import Ava01 from '../../assets/images/ava-1.jpg'

import '../../styles/Slider.css'

const TestimonialSlider = () => {

     const settings = {
          dots: true,
          autoplay: true,
          infinite: true,
          speed: 1000,
          // autoplaySpeed: 1000,
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 1,
     }
     setTimeout(() => {
          settings()
     }, 1000)
     return (
          <Slider {...settings}>
               <div>
                    <p className='review__text'>
                         Welcome, to Restaurant... <br/>
                         This is the golden face that major domestic and foreign brands
                         often target him for each of their marketing campaigns
                    </p>
               </div>
               <div className='review__person d-flex align-items-center gap-3'>
                    <img src={Ava01} alt='' className='rounded' />
                    <div>
                         <h6>John Compose</h6>
                         <p>
                              This is the golden face that major domestic and foreign brands
                              often target him for each of their marketing campaigns
                         </p>
                    </div>
               </div>
               <div className='review__person d-flex align-items-center gap-3'>
                    <img src={Ava01} alt='' className='rounded' />
                    <div>
                         <h6>Tom Matin</h6>
                         <p>
                              This is the golden face that major domestic and foreign brands
                              often target him for each of their marketing campaigns
                         </p>
                    </div>
               </div>
          </Slider>
     )
}

export default TestimonialSlider
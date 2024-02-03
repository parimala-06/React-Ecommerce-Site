import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import Ingredients from '../Ingreditents';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className='container'>
        <div className="inner">
        <Slider {...settings}>
        {Ingredients.map((item, index) => (
            <div key={index} className="carousel-item">
                <div className="c-image">
                    <img src={item.image} alt={`item-${index}`} />
                </div>
                <div className="carousel-text">
                <h3 className='para'>{item.name}</h3>
                <p className='description'>{item.description}</p>
                </div>
            </div>
          ))}
          </Slider>
        </div>
    </div>
  )
}

export default Carousel
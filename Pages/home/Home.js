import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../../assets/slider-1.png";
import image2 from "../../assets/slider-2.png";
import { FaArrowRight } from "react-icons/fa";
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const image1 = require("../../assets/slider-1.png");
  const image2 = require("../../assets/slider-2.png");

  const images = [image1, image2];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleShopClick = () => {
    navigate('/');
  };

  return (
    <div className="home">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-container">
            <img src={image} alt={`slide-${index}`} className="slider-image" />
            <div className='absolute'>
              <h5 className='homeh5'>Only this week</h5>
              <h1 className='homeh1'>Grocery Store With Different Treasures</h1>
              <p className='homep'>We have prepared special discounts for you on grocery products...</p>
              <a href="#" className="btn" onClick={handleShopClick}>SHOP NOW <FaArrowRight /></a>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;

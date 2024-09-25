import React from 'react';
import './Carousel.css';
import Mask from '../assets/mask-group-79858.svg';
import carousel from '../assets/icon-carousel-square-multiple.svg';

const Carousel = () => {
  return (
    <div className="carousel">
      <img
        src={Mask}
        alt="Fairmont The Palm"
        className="carousel-image"
      />
      <div className="carousel-text">
        <h1>
          Welcome to <br /> Fairmont The Palm
        </h1>
      </div>
      <img
        src={carousel}
        alt="Carousel Dots"
        className="carousel-dots"
      />
    </div>
  );
};

export default Carousel;

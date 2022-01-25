import React from 'react';

import { Carousel } from 'react-bootstrap';

import slides from '../../mock/slides.json';

const Slider = () => {
  return (
    <div>
      <Carousel>
        {slides.map(slide => {
          const { img, text, label } = slide;
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={img} alt={label} />
              <Carousel.Caption>
                <h3>{label}</h3>
                <p>{text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;

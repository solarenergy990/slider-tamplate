import React, { useState, useEffect } from 'react';

import { Carousel } from 'react-bootstrap';

// import slides from '../../mock/slides.json';
import catsAPI from '../../services/image-api';

const Slider = () => {
  const [cats, setCats] = useState(null);

  useEffect(() => {
    const fetchCats = async () => {
      await catsAPI().then(res => {
        setCats(res);
      });
    };
    fetchCats();
  }, []);

  return (
    <div>
      <Carousel>
        {cats &&
          cats.map(cat => {
            const { id, largeImageURL, tags } = cat;

            return (
              <Carousel.Item key={id}>
                <img className="d-block w-100" src={largeImageURL} alt={tags} />
                <Carousel.Caption>
                  <h3>Random cats</h3>
                  <p>{tags}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Slider;

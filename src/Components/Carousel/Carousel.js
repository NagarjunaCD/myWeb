import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slide1 from './img1.jpg';
import Slide2 from './img2.jpg';
import Slide3 from './img3.jpg';

const ImageSlider = () => {
  return (
    <div className="container-fluid mt-2"> {/* Use container-fluid to cover full width */}
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is the first slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>This is the second slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the third slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;

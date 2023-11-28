import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card1 from './img1.jpg';
import Card2 from './img2.jpg';
import Card3 from './img3.jpg';
import Card4 from './img4.jpg';
import Card5 from './img5.jpg';
import './Card.css';

const Card = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="card-carousel w-70 h-auto ma4 items-center">
      <Slider className='h-100px w-auto' {...settings}>
        <div className="card ">
          <img className='image' src={Card1}></img>
          <a className='name b black pointer'>ROOM</a>
        </div>
        <div className="card">
          <img  className='image' src={Card2}></img>
          <a className='name b black pointer'>GROUND</a>
        </div>
        <div className="card">
          <img className='image' src={Card3}></img>
          <a className='name b black pointer'>AUDITORIUM</a>
        </div>
        <div className="card">
            <img className='image' src={Card4}></img>
            <a className='name b black pointer'>INDOOR STADIUM</a>
        </div>
        <div className="card">
          <img className='image' src={Card5}></img>
          <a className='name b black pointer'>GYM</a>
        </div>
        {/* Add more cards as needed */}
      </Slider>
    </div>
  );
};

export default Card;

import React from 'react';
import "./News.css";
import News1 from './img1.jpg';
import News2 from './img2.jpg';
import News3 from './img3.jpg';
import News4 from './img4.jpg';

const News = () => {
    return(
         <div>
            <h1 className='b'>NEWS & EVENTS</h1>
            <h6>NEWS AND EVENTS RELATED TO RADHAKRISHA VIDYASHALE</h6>
            <div className='flex ma3 pa3 justify-between'>
                <div className='flex tc flex-column'>
                    <img  className='Events' src={News1} alt="news1"></img>
                    <a className='Description b'>A Trip To Dharmastala</a>
                </div>
                <div className='flex tc flex-column'>
                    <img  className='Events' src={News2} alt="news2"></img>
                    <a className='Description b'>Ethnic Day</a>
                </div>
                <div className='flex tc flex-column'>
                    <img className='Events' src={News3} alt="news3"></img>
                    <a className='Description b'>Black and White Bros</a>
                </div>
                <div className='flex tc flex-column'>
                    <img className='Events' src={News4} alt="news4"></img>
                    <a className='Description b'>Jnanesh with Gadhe</a>
                </div>
            </div>
         </div>
    )
}

export default News;
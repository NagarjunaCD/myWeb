import React from 'react' ;
import './Header.css';
import Image from './img3.jpg';


const Header = () => {
    return (
        < div className='head flex justify-between pa2 '>
          <div className='flex items-center'>
            <img className='image' src={Image} alt='my image'/>
            <p className='name ml3 '>NAGARJUNA C D</p>
          </div>
          
          <div>
            <ul className='navigation '>
                <li className='mr3'>HOME</li>
                <li className='mr3'>ABOUT</li>
                <li className='mr3'>PROJECTS</li>
                <li className='mr3'>CONTACT</li>
            </ul>
          </div>
        </div>
    )
}

export default Header;
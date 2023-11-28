import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import Logo from './logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className=' main flex  justify-between'>
            <div className='flex  LOGO '>
                <img src={Logo} alt='LOGO' />
            </div>    
            
                <div className='flex flex-column items-start b  '>
                    <a><FontAwesomeIcon className='mr2'icon={faPhone} style={{color: "#6f7276",}} />7022207624</a>
                    <a><FontAwesomeIcon className='mr2' icon={faEnvelope} style={{color: "#6f7276",}} />rkvs@gmail.com</a>
                </div>
                <div className=''>
                    <input placeholder='Search...'/>
                    <button className='ml2 h1 pointer'></button>
                </div>
                <div className='f3 pointer w-10 flex justify-between'>
                    <FontAwesomeIcon className=' ' icon={faTwitter} style={{color: "#6f7276",}}/>
                    <FontAwesomeIcon className='' icon={faYoutube} style={{color: "#6f7276",}}/> 
                    <FontAwesomeIcon className='' icon={faFacebook} style={{color: "#6f7276",}}/> 
                </div>
            
           
        </div>
    )
}

export default Header;
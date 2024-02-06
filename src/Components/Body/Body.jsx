import React from 'react';
import './Body.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faMailReply } from '@fortawesome/free-solid-svg-icons';

const Body = () => {

    return(
        <div className='body pa4'>
           <div>

           </div>
           <div>
             <h1 className='intro tc pa3 ma3 '>
                HEY, I'M NAGARJUNA
             </h1>
             <p className='tc pa3 ma3'>
                A Full Stack Web Developer building the Web and Web applications that leads to the success of overall project.
             </p>
             <div className='tc ma2'>
               <button className='pa2'>PROJETCS</button>
             </div>
             <ul className='icons'>
                <li>
                    <a className='black' href=''><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li>
                    <a className='black' href=''><FontAwesomeIcon icon={faLinkedin} /></a>
                </li>
                <li>
                    <a className='black' href=''><FontAwesomeIcon icon={faSnapchat} /></a>
                </li>
                <li>
                    <a className='black' href=''><FontAwesomeIcon icon={faMailReply} /></a>
                </li>
             </ul>
             
           </div>
        </div>
    )
}

export default Body;
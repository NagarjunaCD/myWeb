import React from 'react';
import Announcement from '../Announcement/Announcement';
import './Welcome.css';

const Welcome = () => {
    return(
        <div className='flex ma2 pa2 justify-between '>
            <div>
                <h1 className='b'>WELCOME TO RADHAKRISHNA VIDHYASHALE</h1>
                <p className='b '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <Announcement/>
        </div>
        
    )};
    
    export default Welcome;

import React from 'react';
import './Contents.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faFileCircleCheck, faDownload } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
  return (
    <div className='flex justify-center ma3 pa3 contents f1 '>
      <div className='ma3 pa3 box'>
        <a href='' className='pointer circle'>
          <FontAwesomeIcon icon={faFileCircleCheck} style={{ color: "#6d7788" }} />
        </a>  
        <h3>ADMISSION</h3>
        <p>Admission Procedure for 
            Radha Krishna Vidya Shale
        </p>
      </div>
      <div className='ma3 pa3 box'>
        <a href='' className='pointer circle'>
            < FontAwesomeIcon icon={faBookOpen} style={{ color: "#6d7788" }} />
        </a>    
        <h3>ACADEMICS</h3>
        <p>Academics program of
            Radha Krishna Vidya Shale
        </p>
      </div>
      <div className='ma3 pa3 box'>
        <a href='' className='pointer circle'>
            <FontAwesomeIcon icon={faDownload} style={{ color: "#6d7788" }} />
        </a>
        <h3>DOWNLOADS</h3>
        <p>Downloads related to 
            Radha Krishna Vidya Shale
        </p>
      </div>
    </div>
  );
}

export default Content;

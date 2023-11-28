import React, { useState } from 'react';
import './Announcement.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AnnouncementBox = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    {
      title: 'Announcements',
      content: 'Today will be holidya on the occasion of Diwali. And wish you all a happy Diwali.',
    },
    {
      title: 'Announcements',
      content: '10th model question papers.',
    },
    {
      title: 'Announcements',
      content: 'This is the content for Page 3.',
    },
  ];

  const nextPage = () => {
    setCurrentPage((currentPage + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((currentPage - 1 + pages.length) % pages.length);
  };

  return (
    <div className="announcement-box">
      <div className="announcement-content">
        <h2>{pages[currentPage].title}</h2>
        <p>{pages[currentPage].content}</p>
      </div>
      <div className="page-buttons ">
        <button  className='mr3' onClick={prevPage}>
          <FontAwesomeIcon icon={faArrowLeft} style={{color: "#000000",}} />
        </button>
        <button className='ml3' onClick={nextPage}>
          <FontAwesomeIcon icon={faArrowRight} style={{color: "#000000",}} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBox;

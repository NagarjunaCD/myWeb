import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Management from '../../Pages/Management/Management';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
      <Router>
        <div>
          <nav className='white'>
            <ul className='flex items-center b list pl0 justify-between ma2 pd4 h2'>
                <li className='larger-text mb-3'><a href='' to='/'>HOME</a></li>
                <li>
                  <div class="dropdown">
                      <button class="dropbtn">ABOUT US <FontAwesomeIcon icon={faCaretDown} />
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                        <a href="">VISION AND MISSION</a>
                        <a to='' >MANAGEMENT</a>
                        <a href="#">VIEW FROM PRINCI'S DESK</a>
                      </div>
                  </div>
                </li>
                <li className='larger-text mb-3'><a to='/management'> ADMISSIONS</a></li>
                <li>
                  <div class="dropdown">
                      <button class="dropbtn">ACADEMICS <FontAwesomeIcon icon={faCaretDown} />
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                        <a href="#">YEAR CALENDER</a>
                        <a href="#">COURSE DETAILS</a>
                      </div>
                  </div>
                </li>
                <li>
                  <div class="dropdown">
                      <button class="dropbtn">NEWS AND EVENTS <FontAwesomeIcon icon={faCaretDown} />
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                        <a href="#">NEWS UPDATE </a>
                        <a href="#">EVENTS</a>
                        <a href="#">MEDIA</a>
                      </div>
                  </div>
                </li>
                <li>
                  <div class="dropdown">
                      <button class="dropbtn">CAMPUS <FontAwesomeIcon icon={faCaretDown} />
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                        <a href="#">ABOUT CAMPUS</a>
                        <a href="#">PRAYER</a>
                        <a href="#">FACILITIES</a>
                      </div>
                  </div>
                </li>
                <li>
                  <div class="dropdown">
                      <button class="dropbtn">GALLERY <FontAwesomeIcon icon={faCaretDown} />
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                        <a href="#">PHOTO</a>
                        <a href="#">VIDEO</a>
                      </div>
                  </div>
                </li>
                <li className='larger-text mb-3'><a >REVIEW</a></li>
                <li className='larger-text mb-3'><a>CONTACT US</a></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/management" component={Management} />
          </Routes>
        </div>
      </Router>
    )
}

export default Navbar;
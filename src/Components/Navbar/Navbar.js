import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Link, Routes ,NavLink} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  const customBackgroundColor = "#8D0056";
    return (
          <nav className='white'>
            <ul className='flex items-center b list pl0 justify-between ma2 pd4 h2'>
                <li className='larger-text mb-2'><NavLink to='/home'>HOME</NavLink></li>
                <li>
                  
                      <Dropdown >
                          <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: customBackgroundColor }} className='btn-custom b bn br0 h-18px'>
                            ABOUT US
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="dropdown-menu-custom b">
                            <Dropdown.Item >
                              <NavLink to='/management'>MANAGEMENT</NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <NavLink to='/vision'>VISION AND MISSION</NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <NavLink to='/princi'>PRINCI'S VIEW</NavLink>
                              </Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                 
                </li>
                <li className='larger-text mb-2'><a to='/management'> ADMISSIONS</a></li>
                <li>
                  
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic"  style={{ backgroundColor: customBackgroundColor }} className='btn-custom b bn 17px h-20px br0'>
                          ACADEMICS
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu-custom b">
                          <Dropdown.Item>
                            <NavLink to='/calender'>ANNUAL CALENDER</NavLink>
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <NavLink to='/syllabus'>SYLLABUS</NavLink>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                  
                </li>
                <li>
                  
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: customBackgroundColor }} className='btn-custom b bn'>
                            NEWS AND EVENTS
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="dropdown-menu-custom b">
                            <Dropdown.Item>
                              <NavLink to='/news'>NEWS AND UPDATE</NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <NavLink to='/events'>EVENTS</NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <NavLink to='/media'>MEDIA</NavLink>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                  
                </li>
                <li>
                  
                      <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: customBackgroundColor }} className='btn-custom b bn'>
                          ABOUT US
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu-custom b">
                          <Dropdown.Item>
                            <NavLink to='/campus'>ABOUT CAMPUS</NavLink>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <NavLink to='/prayer'>PRAYER</NavLink>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <NavLink to='/facilities'>FACILITIES</NavLink>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                
                </li>
                <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: customBackgroundColor }} className='btn-custom b bn'>
                       GALLERY
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-menu-custom b">
                        <Dropdown.Item>
                          <NavLink to='/photo'>PHOTO</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <NavLink to='/video'>VIDEO</NavLink>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className='larger-text mb-2'><a >REVIEW</a></li>
                <li className='larger-text mb-2'><a>CONTACT US</a></li>
            </ul>
          </nav>
          
    )
}

export default Navbar;
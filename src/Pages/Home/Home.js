import React from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Carousel from '../../Components/Carousel/Carousel';
import Welcome from '../../Components/Welcome/Welcome';
import Contents from '../../Components/Contents/Contents';
import News from '../../Components/News/News';
import Facilities from '../../Components/Facilities/Facilities';
import Footer from '../../Components/Footer/Footer';
import Number from '../../Components/Number/Number';

const Home = () => {
    return (
        <div>
          <Header/>
          <Navbar/>
          <Carousel/>
          <Welcome/>
          <Contents/>
          <News/>
          <Facilities/>
          <Footer/>
          <Number/>
        </div>

    )
}

export default Home ; 
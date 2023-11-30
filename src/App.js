import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Management from './Pages/Management/Management';
import Vision from './Pages/Vision And Mission/VM';
import Princi from './Pages/Princi/Princi';
import Calender from './Pages/Calender/Caleder';
import Syllabus from './Pages/Syllabus/Syllabus';
import News from './Pages/News/News';
import Events from './Pages/Events/Events';
import Media from './Pages/Media/Media';
import Campus from './Pages/Campus/Campus';
import Facilities from './Pages/Facilities/Facilities';
import Prayer from './Pages/Prayer/Prayer';
import Photo from './Pages/Photo/Photo';
import Video from './Pages/Video/Video';





function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/management" element={<Management />} />
          <Route path="/vision" element={<Vision/>}/>
          <Route path='/princi' element={<Princi/>}/>
          <Route path='/calender' element={<Calender/>}/>
          <Route path='/syllabus' element={<Syllabus/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/media' element={<Media/>}/>
          <Route path='/campus' element={<Campus/>}/>
          <Route path='/prayer' element={<Prayer/>}/>
          <Route path='/facilities' element={<Facilities/>}/>
          <Route path='/photo' element={<Photo/>}/>
          <Route path='/video' element={<Video/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

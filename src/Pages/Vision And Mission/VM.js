import React from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './VM.css';

const Vision = () => {

    const visionPoints = [
        'Empower students at Radha Krishna Vidya Shale to become innovative thinkers and lifelong learners, preparing them for a dynamic and ever-changing world.',
        'Foster a culture of creativity and critical thinking, positioning Radha Krishna Vidya Shale as a hub for innovative education that transcends traditional boundaries.',
        'Strive to be a pioneer in educational technology, integrating cutting-edge tools and methodologies to enhance the learning experience at Radha Krishna Vidya Shale.',
        'Envision Radha Krishna Vidya Shale as a center of excellence, where innovation in teaching and learning is embraced to inspire students to reach their fullest potential.',
        'Aspire to create a learning environment that encourages curiosity, experimentation, and problem-solving, shaping Radha Krishna Vidya Shale into a beacon of innovation in education.'
        
      ];

      const missionPoints = [
        'Equip Radha Krishna Vidya Shale with state-of-the-art resources and technologies to cultivate an environment where students can explore and apply innovative ideas.',
        'Implement a curriculum at Radha Krishna Vidya Shale that integrates STEAM (Science, Technology, Engineering, Arts, and Mathematics) education, fostering a holistic approach to innovation.',
        'Engage educators at Radha Krishna Vidya Shale in continuous professional development, ensuring they stay abreast of innovative teaching methods and strategies.',
        'Cultivate partnerships with industry leaders and organizations to provide Radha Krishna Vidya Shale students with real-world experiences and opportunities for innovation.',
        'Encourage a culture of collaboration and teamwork at Radha Krishna Vidya Shale, where students are motivated to work together on innovative projects that contribute to their personal and academic growth.'
      ];

    return(
        <>
            <Header/>
            <Navbar/>
            <div className='Vision ma2 pa2 b'>
                <h2>VISION</h2>
                <ul>
                    {visionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
            <div className='Mission ma2 pa2 b'>
                <h2>MISSION</h2>
                <ul>
                    {missionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </>
        

    )
}

export default Vision;
import React from 'react';
import './Text.css';

const Text = () => {
    return (
         <div className=' flex flex-column w-30 h-auto items-start ma2 pa2'>
            <h1 className='b white ma3'>Facilities</h1>
            <p className='black item-start ma3'> RadhaKrisha VidyaShale aim to harness the energy of the puplils and teachers for the overall development of their potentialities.
            </p>
            <button className=' View-all w-15 h-auto pointer b ma3'>View All</button>
         </div>
    )
}

export default Text;
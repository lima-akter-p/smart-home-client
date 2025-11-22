import React from 'react';
import img1 from '../assets/404 image.jpg'

const NotFound = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center text-center bg-white'>
         <img src={img1} alt="" />
        </div>
    );
};

export default NotFound;
import React from 'react';
import Navbar from '../Navber/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto '>
          <Navbar></Navbar>
          <ToastContainer></ToastContainer>

          
           
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;
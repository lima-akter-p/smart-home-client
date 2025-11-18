import React from 'react';
import Navbar from '../Navber/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto py-4'>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>


        </div>
    );
};

export default AuthLayout;
import React from "react";
import Navbar from "../Navber/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
  return (
    
    <div >
     <ToastContainer></ToastContainer>
    
     <div className="w-full sticky top-0 z-50 ">
      <Navbar></Navbar>

     </div>

      

      <main className="w-11/12 mx-auto ">
        <Outlet></Outlet>
      </main>
      <div className="w-11/12 mx-auto ">
      <Footer></Footer>
      </div>
      
    </div>
  );
};

export default HomeLayout;

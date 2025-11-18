import React from 'react';
import SwiperSolider from '../../Components/SwiperSlider/SwiperSolider';
import LatestProperties from '../../Components/LatestProperties/LatestProperties';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import ClientReview from '../../Components/ClientReview/ClientReview';

const latestPropertiesPromise = fetch('http://localhost:3000/latest-properties')
.then(res => res.json());


const Home = () => {
    return (
        <div className="">

          <SwiperSolider></SwiperSolider> 

          
           <LatestProperties latestPropertiesPromise = {latestPropertiesPromise}></LatestProperties>

           <ChooseUs></ChooseUs>
           <ClientReview></ClientReview>

          
         

          

         
            
        </div>
    );
};

export default Home;
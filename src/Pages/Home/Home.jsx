import React from 'react';
import SwiperSolider from '../../Components/SwiperSlider/SwiperSolider';
import LatestProperties from '../../Components/LatestProperties/LatestProperties';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import ClientReview from '../../Components/ClientReview/ClientReview';
import TeamSection from './TeamSection';
import LatestBlog from './LatestBlog.jsx';
import PopularLocations from './PopularLocation.jsx';
import PropertyCategories from './PropertiCategories.jsx';
import AdvancedSearch from './Advance.jsx';
import FeaturedProperties from './Featured.jsx';
import FAQ from './Faqsection.jsx';


const latestPropertiesPromise = fetch('https://smart-home-api-server.vercel.app/latest-properties')
.then(res => res.json());


const Home = () => {
    return (
        <div className="w-12/12">

          <SwiperSolider></SwiperSolider> 

          
           <LatestProperties latestPropertiesPromise = {latestPropertiesPromise}></LatestProperties>

           

           <ChooseUs></ChooseUs>
           <ClientReview></ClientReview>
           <TeamSection></TeamSection>
           <LatestBlog></LatestBlog>
           <PopularLocations></PopularLocations>
           <PropertyCategories></PropertyCategories>
           <AdvancedSearch></AdvancedSearch>
           <FeaturedProperties></FeaturedProperties>
           <FAQ></FAQ>
           

          
         

          

         
            
        </div>
    );
};

export default Home;
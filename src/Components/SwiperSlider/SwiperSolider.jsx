import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const SwiperSlider = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">


            <SwiperSlide>
                <div className="relative">
                    <img
                        src=" https://i.ibb.co.com/zH2bzpjT/image4.jpg "
                        className="w-full h-[400px] object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center pl-20">
                        <h2 className="text-white text-5xl font-bold">Luxury Apartments</h2>
                        <p className="text-white mt-3 text-lg w-[450px]">
                            We provide premium quality real estate services for your lifestyle.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img
                        src="https://i.ibb.co.com/mMrC0Rn/building1.jpg"
                        className="w-full h-[400px] object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center pl-20">
                        <h2 className="text-white text-5xl font-bold">Modern Living Spaces</h2>
                        <p className="text-white mt-3 text-lg w-[450px]">
                           Homes designed for comfort, luxury and convenience.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img
                        src="https://i.ibb.co.com/fdZCzP8D/building3.jpg"
                        className="w-full h-[400px] object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center pl-20">
                        <h2 className="text-white text-5xl font-bold">Find Your Dream Home</h2>
                        <p className="text-white mt-3 text-lg w-[450px]">
                           Discover top properties for rent & sale in your favourite city.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        



        </Swiper>
    );
};

export default SwiperSlider;


import React from "react";
import "./Header.css"
import HeaderSwiper from "./HeaderSwiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Header = () => {
  return (
    <>
      <div className="header">

        {/* <Navbar /> */}
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide className="swip"><HeaderSwiper className="swip1"/></SwiperSlide>
            <SwiperSlide><HeaderSwiper/></SwiperSlide>
            <SwiperSlide><HeaderSwiper/></SwiperSlide>
          </Swiper>
        </>
      </div>
    </>
  );
};

export default Header;

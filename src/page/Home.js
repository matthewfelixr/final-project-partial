import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from '../components/carousel/Carousel';
import Category from '../components/category/Category';

const Home = () => {
  return (
    <>
        <Carousel/>
        <Category/>
    </>
  )
}

export default Home
'use client'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Slider from './Slider';

const Sliders = () => {
    const [sliders, setSliders] = useState([])
    const swiperRef = useRef(null);

    useEffect(()=>{
        fetch('slider.json')
        .then(res => res.json())
        .then(data => setSliders(data))
    },[])
    // console.log(sliders);

    const goNext = () => {
        if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className='w-full rounded-xl overflow-hidden z-9'>
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                modules={[Autoplay, Pagination]}
            >
                {
                    sliders.map(slider => <SwiperSlide className='flex justify-center' key={slider.id}><Slider slider={slider} /></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Sliders;
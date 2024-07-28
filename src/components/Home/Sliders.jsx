'use client'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Slider from './Slider';
import SliderSkeleton from '../Skeleton/SliderSkeleton';

const Sliders = () => {
    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('slider.json')
        .then(res => res.json())
        .then(data => setSliders(data));
        setTimeout(() => {
            setLoading(false)
        }, 200);
    },[])

    return (
        <div className='w-full lg:w-[1440px] rounded-xl overflow-hidden z-9 px-5 lg:px-0'>
            <Swiper
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
                { loading ?
                    <SliderSkeleton></SliderSkeleton>
                    :
                    sliders.map(slider => <SwiperSlide className='flex justify-center' key={slider.id}><Slider slider={slider} /></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Sliders;
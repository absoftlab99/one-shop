'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const QuickView = ({ product }) => {
    const { id, thumbnail, name, short_description, description, price, sale_price, brand, category, rating, discount, stock_count } = product;

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button> */}
            <dialog id={id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-5">
                            <Swiper
                                modules={[Thumbs, Pagination, A11y]} thumbs={{ swiper: thumbsSwiper }}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                <SwiperSlide className='rounded-xl cursor-grabbing'>
                                    <Image className="border rounded-xl" src={thumbnail} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='product image' />
                                </SwiperSlide>
                                <SwiperSlide className='rounded-xl cursor-grabbing'>
                                    <Image className="border rounded-xl" src={thumbnail} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='product image' />
                                </SwiperSlide>
                                <SwiperSlide className='rounded-xl cursor-grabbing'>
                                    <Image className="border rounded-xl" src={thumbnail} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='product image' />
                                </SwiperSlide>
                                <SwiperSlide className='rounded-xl cursor-grabbing'>
                                    <Image className="border rounded-xl" src={thumbnail} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='product image' />
                                </SwiperSlide>
                            </Swiper>
                            <div className="flex gap-2 items-center">
                                <Swiper
                                    className='mt-3'
                                    modules={[Thumbs, A11y]}
                                    watchSlidesProgress
                                    onSwiper={setThumbsSwiper}
                                    slidesPerView={4}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                >
                                    <SwiperSlide className='p-2 cursor-pointer'>
                                        <Image className="border" src={thumbnail} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='product image' />
                                    </SwiperSlide>
                                    <SwiperSlide className='p-2 cursor-pointer'>
                                        <Image className="border" src={thumbnail} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='product image' />
                                    </SwiperSlide>
                                    <SwiperSlide className='p-2 cursor-pointer'>
                                        <Image className="border" src={thumbnail} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='product image' />
                                    </SwiperSlide>
                                    <SwiperSlide className='p-2 cursor-pointer'>
                                        <Image className="border" src={thumbnail} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='product image' />
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                        </div>
                        <div className="col-span-12 md:col-span-7">
                            <div className="badge badge-warning text-white">{discount}</div>
                            <h1 className='text-[20px] md:text-[28px]'>{name}</h1>
                            <div className='flex justify-between items-center'>
                                <div className="flex gap-3">
                                    <p className='font-bold text-[24px] text-primary'>{sale_price}</p>
                                    <s className='font-light text-[24px] text-error'>{price}</s>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" defaultChecked />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
                                    </div>
                                    <p className='text-[14px]'>38 Customer Reviews</p>
                                </div>
                            </div>
                            <div className="text-[14px] mt-5">{description.slice(0, 280)}...</div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-primary focus-visible:-inset-0">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default QuickView;
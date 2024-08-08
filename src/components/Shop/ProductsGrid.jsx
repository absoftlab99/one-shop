'use client'
import { IconEye, IconHeart, IconHeartFilled, IconMinus, IconPlus, IconShoppingCartPlus, IconStarFilled } from '@tabler/icons-react';
import React, { useState } from 'react';
import QuickView from './QuickView';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProductsGrid = ({ product }) => {
    const { id, name, thumbnail, short_description, description, price, sale_price, brand, category, rating, discount, stock_count } = product;
    const [wishlist, setWishlist] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [quantity, setQuantity] = useState(1);
    // console.log(name);

    const toggleAnimation = () => {
        setAnimate(!animate)
    };
    // const minusQuantity = () =>{
    //     setQuantity(quantity - 1)
    // }
    // const addQuantity = () =>{
    //     setQuantity(quantity + 1)
    // }
    return (
        <div className='col-span-12 md:col-span-4 lg:col-span-3'>
            <div onMouseEnter={() => { setAnimate(true); toggleAnimation() }} onMouseLeave={() => setAnimate(false)} className="card card-bordered awesome-shadow hover:scale-105 transition-all duration-500">
                <figure onClick={() => document.getElementById(`${id}`).showModal()} className='relative cursor-'>
                    {/* <div className='skeleton h-[250px] w-full rounded-b-none'></div> */}
                    <Image className={animate ? 'scale-110 transition-all duration-500' : 'scale-100 transition-all duration-500'} src={thumbnail} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='product image' />
                    <div className='absolute top-5 left-0 bg-primary rounded-full rounded-s-none px-2 text-white text-[12px] md:text-[14px]'>{brand}</div>
                    <motion.dev
                    className=''
                    initial={{ y: 0 }}
                    animate={{ y: animate ? 170 : 260 }}
                    transition={{ ease: "easeIn", duration: animate ? 0.3 : 0.3 }}
                    >
                        <div className={`flex gap-2 absolute bottom-4 right-4 bg-primary p-2 rounded-xl`}>
                            <div onClick={() => document.getElementById(`${id}`).showModal()} className="p-2 cursor-pointer"><IconEye className='text-white' size={20}></IconEye></div>
                            <div className="p-2 cursor-pointer"><IconShoppingCartPlus className='text-white' size={20}></IconShoppingCartPlus></div>
                            <div className="p-2 cursor-pointer">{wishlist ? <IconHeartFilled onClick={() => setWishlist(false)} className='text-error cursor-pointer' size={20}></IconHeartFilled> : <IconHeart onClick={() => setWishlist(true)} className='text-white cursor-pointer' size={20}></IconHeart>}</div>
                        </div>
                    </motion.dev>
                </figure>
                <div className="card-body p-4 flex flex-col justify-between min-h-[175px]">
                    <div className="card-title">
                        {name}
                    </div>
                    <div>
                        <div className="flex gap-2 justify-between">
                            <div className='flex gap-2'>
                                <p className='text-[14px] md:text-[18px]'>Price:</p>
                                <div className="">
                                    <p className='font-bold text-[14px] md:text-[18px]'>{sale_price} BDT</p>
                                    <s className='text-error'>{price} BDT</s>
                                </div>
                            </div>
                            <div className="">
                                <p className='flex gap-2 items-center'><IconStarFilled className='text-yellow-400' size={20}></IconStarFilled> {rating}</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p className='text-success'>In-stock: <span className='font-bold'>{stock_count}</span></p>
                            <p className='text-end cursor-pointer text-primary hover:underline'>{category}</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 mt-5 px-4 pb-4">
                    <div className="join">
                        <div onClick={()=> setQuantity(quantity - 1)} className="btn btn-primary btn-outline rounded-full btn-sm join-item"><IconMinus size={15}/></div>
                        <input className='input input-sm input-primary join-item w-full max-w-[50px] text-center focus-visible:outline-none' type="text" name="quantity" id="quantity" value={quantity} />
                        <div onClick={()=> setQuantity(quantity + 1)} className="btn btn-primary btn-outline rounded-full btn-sm join-item"><IconPlus size={15}/></div>
                    </div>
                    <button className={`btn btn-sm btn-primary rounded-full ${quantity <= 0 ? 'btn-disabled': ''}`}>Add to Cart</button>
                </div>
            </div>
            <QuickView product={product}></QuickView>
        </div>
    );
};

export default ProductsGrid;
'use client'
import { IconEye, IconHeart, IconHeartFilled, IconMinus, IconPlus, IconShoppingCartPlus, IconStarFilled } from '@tabler/icons-react';
import React, { useState } from 'react';
import QuickView from './QuickView';
import Image from 'next/image';

const ProductsList = ({ product }) => {
    const { id, name, thumbnail, short_description, description, price, sale_price, brand, category, rating, discount, stock_count } = product;
    const [wishlist, setWishlist] = useState(false);
    const [quantity, setQuantity] = useState(1);
    return (
        <div className='flex border awesome-shadow rounded-xl mb-5 w-full overflow-hidden hover:scale-105 transition-all duration-500'>
            <figure className='relative'>
                {/* <div className='skeleton h-full w-[300px] rounded-e-none'></div> */}
                <Image className='w-full h-full' src={thumbnail} width={300} height={300} style={{ width: '100%', height: '157px' }} alt='product image' />
                <div className='absolute top-5 left-0 bg-primary rounded-full rounded-s-none px-2 text-white text-[12px] md:text-[14px]'>{brand}</div>
            </figure>
            <div className="card-body p-4">
                <div className='grid grid-cols-12 justify-between'>
                    <div className='col-span-7'>
                        <div className="card-title">
                            {name}
                        </div>
                        <div className='flex gap-10 mt-2'>
                            <div className="">
                                <div className=''>
                                    <p className='text-[14px] md:text-[18px]'>Price: <span className='font-bold'>{sale_price} BDT</span></p>
                                    <s className='text-gray-400'>{price} BDT</s>
                                </div>
                                <div className="">
                                    <p className='flex gap-2 items-center'><IconStarFilled className='text-warning' size={20}></IconStarFilled> {rating}</p>
                                </div>
                            </div>
                            <div className="">
                                <p>In-stock: {stock_count}</p>
                                <p className='text-start'>{category}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-5 flex justify-between'>
                        <div className="flex items-center gap-2 mt-5 px-4 pb-4">
                            <div className="join">
                                <div onClick={() => setQuantity(quantity - 1)} className="btn rounded-full btn-sm join-item"><IconMinus size={15} /></div>
                                <input className='input input-sm input-bordered join-item w-full max-w-[50px] text-center' type="text" name="quantity" id="quantity" value={quantity} />
                                <div onClick={() => setQuantity(quantity + 1)} className="btn rounded-full btn-sm join-item"><IconPlus size={15} /></div>
                            </div>
                            <button className='btn btn-sm btn-primary rounded-full'>Add to Cart</button>
                        </div>
                        <div className="h-full flex items-center">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <div onClick={() => document.getElementById(`${id}`).showModal()} className="bg-primary rounded-full p-2 cursor-pointer"><IconEye className='text-white' size={20}></IconEye></div>
                                <div className="bg-primary rounded-full p-2 cursor-pointer"><IconShoppingCartPlus className='text-white' size={20}></IconShoppingCartPlus></div>
                                <div className="bg-primary rounded-full p-2">{wishlist ? <IconHeartFilled onClick={() => setWishlist(false)} className='text-error cursor-pointer' size={20}></IconHeartFilled> : <IconHeart onClick={() => setWishlist(true)} className='text-white cursor-pointer' size={20}></IconHeart>}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <QuickView product={product}></QuickView>
        </div>
    );
};

export default ProductsList;
'use client'
import { IconEye, IconHeart, IconHeartFilled, IconShoppingCartPlus, IconStarFilled } from '@tabler/icons-react';
import React, { useState } from 'react';

const ProductsList = ({ product }) => {
    const { name, price, sale_price, brand, category, rating, discount, stock_count } = product;
    const [wishlist, setWishlist] = useState(false);
    return (
        <div className='flex border mb-5 w-full'>
            <figure className='relative'>
                <div className='skeleton h-full w-[300px] rounded-e-none'></div>
                <div className='absolute top-5 left-0 bg-primary rounded-full rounded-s-none px-2 text-white text-[12px] md:text-[14px]'>{brand}</div>
            </figure>
            <div className="card-body p-4">
                <div className='flex justify-between'>
                    <div>
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
                        <div className="card-actions flex gap-2 mt-3">
                            <button className='btn btn-sm btn-primary rounded-full'>Buy Now</button>
                            <button className='btn btn-sm btn-primary rounded-full'>Add to Cart</button>
                        </div>
                    </div>
                    <div className="h-full flex items-center">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div className="bg-primary rounded-full p-2"><IconEye className='text-white' size={20}></IconEye></div>
                            <div className="bg-primary rounded-full p-2"><IconShoppingCartPlus className='text-white' size={20}></IconShoppingCartPlus></div>
                            <div className="bg-primary rounded-full p-2">{wishlist ? <IconHeartFilled onClick={() => setWishlist(false)} className='text-error cursor-pointer' size={20}></IconHeartFilled> : <IconHeart onClick={() => setWishlist(true)} className='text-white cursor-pointer' size={20}></IconHeart>}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;
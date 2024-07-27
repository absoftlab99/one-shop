import { IconEye, IconHeart, IconHeartFilled, IconShoppingCartPlus, IconStarFilled } from '@tabler/icons-react';
import React, { useState } from 'react';
import QuickView from './QuickView';
import Image from 'next/image';
const ProductsGrid = ({ product }) => {
    const { id, name, thumbnail, short_description, description, price, sale_price, brand, category, rating, discount, stock_count } = product;
    const [wishlist, setWishlist] = useState(false);
    // console.log(name);
    return (
        <div className='col-span-12 md:col-span-4 lg:col-span-3'>
            <div className="card card-bordered border-primary">
                <figure className='relative'>
                    {/* <div className='skeleton h-[250px] w-full rounded-b-none'></div> */}
                    <Image src={thumbnail} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='product image'/>
                    <div className='absolute top-5 left-0 bg-primary rounded-full rounded-s-none px-2 text-white text-[12px] md:text-[14px]'>{brand}</div>
                    <div className="flex gap-2 absolute bottom-4 right-4">
                        <div onClick={() => document.getElementById(`${id}`).showModal()} className="bg-primary rounded-full p-2 cursor-pointer"><IconEye className='text-white' size={20}></IconEye></div>
                        <div className="bg-primary rounded-full p-2 cursor-pointer"><IconShoppingCartPlus className='text-white' size={20}></IconShoppingCartPlus></div>
                        <div className="bg-primary rounded-full p-2 cursor-pointer">{wishlist ? <IconHeartFilled onClick={() => setWishlist(false)} className='text-error cursor-pointer' size={20}></IconHeartFilled> : <IconHeart onClick={() => setWishlist(true)} className='text-white cursor-pointer' size={20}></IconHeart>}</div>
                    </div>
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
                                    <s className='text-gray-400'>{price} BDT</s>
                                </div>
                            </div>
                            <div className="">
                                <p className='flex gap-2 items-center'><IconStarFilled className='text-warning' size={20}></IconStarFilled> {rating}</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p>In-stock: {stock_count}</p>
                            <p className='text-end'>{category}</p>
                        </div>
                    </div>
                </div>
                <div className="card-actions flex gap-2 mt-5 px-4 pb-4">
                    <button className='btn btn-sm btn-primary rounded-full'>Buy Now</button>
                    <button className='btn btn-sm btn-primary rounded-full'>Add to Cart</button>
                </div>
            </div>
            <QuickView product={product}></QuickView>
        </div>
    );
};

export default ProductsGrid;
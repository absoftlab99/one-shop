'use client'
import React, { useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { IconArrowDown, IconGrid4x4, IconList } from '@tabler/icons-react';

const ProductsMain = () => {
    const [view, setView] = useState(true);
    const [products, setProducts] = useState([])
    const [wishlist, setWishlist] = useState(false);
    const [loading, setLoading] = useState(true)
    const [loadProducts, setLoadProducts] = useState(8);
    const loadMoreProducts = () =>{
        setLoadProducts(prevCount => prevCount + 8)
    };

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
        setLoading(false);
    }, [])

    // console.log(products);
    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h1 className='text-[28px] md:text-[36px] font-semibold'>Fetured Products</h1>
                <div className='flex gap-2 items-center'>
                    <IconList onClick={() => {setView(false); setLoadProducts(4)}} className={`cursor-pointer ${view ? 'text-gray-400' : 'text-black'}`}></IconList>
                    <IconGrid4x4 onClick={() => {setView(true); setLoadProducts(8)}} className={`cursor-pointer ${view ? 'text-black' : 'text-gray-400'}`}></IconGrid4x4>
                </div>
            </div>
            {
                view ? <div className='grid grid-cols-12 md:gap-8 justify-between'> {products.slice(0, loadProducts).map(product => <ProductsGrid key={product.id} product={product}></ProductsGrid>)}</div> : products.slice(0, loadProducts).map(product => <ProductsList key={product.id} product={product} ></ProductsList>)
            }
            <div className="grid place-content-center my-5">
                {
                    loading
                        ?
                        <div className='loading loading-bars bg-primary'></div>
                        :
                        <button onClick={loadMoreProducts} className={`btn btn-primary rounded-full ${products.length <= loadProducts ? 'hidden' : ''}`} type="button">Load More <IconArrowDown></IconArrowDown></button>
                }
            </div>
        </div>
    );
};

export default ProductsMain;
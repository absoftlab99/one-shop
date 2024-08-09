'use client'
import React, { useState } from 'react';

const Tabs = ({ product }) => {
    const { id, thumbnail, name, short_description, description, price, sale_price, brand, category, rating, discount, stock_count } = product;
    const [tab, setTab] = useState(0);
    return (
        <div className="">
            <div className='flex gap-3 items-center'>
                <button onClick={()=>setTab(0)} className={tab === 0 ? 'btn btn-primary rounded-t-xl rounded-b-none':''} type="button">Description</button>
                <button onClick={()=>setTab(1)} className={tab === 1 ? 'btn btn-primary rounded-t-xl rounded-b-none':''} type="button">Additional Information</button>
            </div>
            {tab === 0 ?
            <div className="bg-base-100 border-base-300 rounded-box border rounded-s-none p-4">
                {description}
            </div>
                :
            <div className="bg-base-100 border-base-300 rounded-box border p-4">
                <p><span className='font-bold'>Brand:</span> {brand}</p>
                <p><span className='font-bold'>In Stock:</span> {stock_count}</p>
                <p><span className='font-bold'>Category:</span> {category}</p>
                <p><span className='font-bold'>Rating:</span> {rating}</p>
            </div>
            }
        </div>
    );
};

export default Tabs;
'use client'
import { IconHeart, IconHome, IconShoppingBag } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileNavigation = () => {
    const [active, setActive] = useState(0)
    return (
        <div className="btm-nav md:hidden border-t-2">
            <Link className={active === 0 ? 'active bg-primary text-white' : ''} onClick={() => setActive(0)} href='/'>
                <IconHome></IconHome>
                <span className="btm-nav-label">Home</span>
            </Link>
            <button onClick={() => setActive(1)} className={active === 1 ? 'active bg-primary text-white' : ''}>
                <IconHeart></IconHeart>
                <span className="btm-nav-label flex gap-2">Wishlist <p className='bg-error w-6 h-6 text-[14px] rounded-full text-white'>3</p></span>
            </button>
            <button onClick={() => setActive(2)} className={active === 2 ? 'active bg-primary text-white' : ''}>
                <IconShoppingBag></IconShoppingBag>
                <span className="btm-nav-label flex gap-2">Cart <p className='bg-error w-6 h-6 text-[14px] rounded-full text-white'>3</p></span>
            </button>
        </div>
    );
};

export default MobileNavigation;
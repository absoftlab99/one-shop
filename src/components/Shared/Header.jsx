import Image from 'next/image';
import React from 'react';
import logo from '../../assets/image/logo.png';
import { IconHeartFilled, IconSearch, IconShoppingBag } from '@tabler/icons-react';
import Drawer from './Drawer';

const Header = () => {
    return (
        <div className='grid lg:place-content-center bg-base-20 border-b-2 px-5 lg:px-0 w-full'>
            <div className="navbar w-full lg:w-[1440px] px-0">
                <div className="navbar-start">
                    <div className="flex items-center gap-2 w-full">
                        <Image src={logo} height={60} width={60} alt='logo' />
                        <h1 className='text-black font-bold text-[24px] md:text-[36px]'>One <span className='text-primary font-ext'>Shop</span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex join">
                    <input type="text" placeholder="Search for products" className="focus-visible:outline-none input text-[14px] text-light input-bordered join-item rounded-full w-[400px]" />
                    <select className="select select-bordered w-[200px] join-item focus-visible:outline-none">
                        <option disabled selected>Select Category</option>
                        <option>Computer Accessories</option>
                        <option>Storage</option>
                        <option>Camera</option>
                    </select>
                    <button className='border-2 btn text-gray-500 join-item rounded-full px-4' type="button"><IconSearch></IconSearch></button>
                </div>
                <div className="navbar-end gap-2 hidden md:flex">
                    <a className="btn"><IconHeartFilled className='text-error' /> <span className='text-white h-6 w-6 text-[14px] bg-primary rounded-full p-1'>2</span></a>
                    <a className="btn"><IconShoppingBag /> <span className='text-white h-6 w-6 text-[14px] bg-primary rounded-full p-1'>2</span></a>
                </div>
                <div className="navbar-end">
                    <Drawer></Drawer>
                </div>
            </div>
        </div>
    );
};

export default Header;
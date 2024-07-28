import { IconChevronDown, IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

const HeaderBottom = () => {
    return (
        <div className='grid lg:place-content-center border-b-2 z-10 px-5 lg:px-0'>
            <nav className='w-full lg:w-[1440px] grid grid-cols-12 items-center'>
                <div className='col-span-9 flex items-center justify-start gap-5 w-full'>
                    <div className="">
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-primary rounded-full m-1"><IconMenu2 /><span className='pe-5' >Browse Categories</span> <IconChevronDown></IconChevronDown></div>
                            <ul tabIndex={0} className="dropdown-content bg-primary menu rounded-box w-full text-white z-[10] p-2 shadow">
                                <li><Link href='/'>Computer Accessiories</Link></li>
                                <li><Link href='/'>Camera</Link></li>
                                <li><Link href='/'>Electronics</Link></li>
                                <li><Link href='/'>Smart Phone</Link></li>
                                <li><Link href='/'>Smart Watch</Link></li>
                                <li><Link href='/'>Telivision</Link></li>
                                <li><Link href='/'>Home Applaience</Link></li>
                                <li><Link href='/'>Fridge</Link></li>
                                <li><Link href='/'>Air Condition</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/'>Computer Accessiories</Link></li>
                            <li><Link href='/'>Camera</Link></li>
                            <li><Link href='/'>Electronics</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-3 flex items-center justify-end">
                    <button className='btn rounded-full' type="button">Secrate Deal</button>
                </div>
            </nav>
        </div>
    );
};

export default HeaderBottom;
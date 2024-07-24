import { IconBrandFacebook, IconBrandPinterest, IconBrandX, IconBrandYoutube, IconMail, IconPhone } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

const HeaderTop = () => {
    return (
        <div className='bg-primary md:grid place-content-center hidden py-2'>
            <div className='flex justify-between lg:w-[1440px]'>
                <div className='flex gap-5'>
                    <Link href='mailto:support@oneshop.com' className="flex items-center gap-2 text-white">
                        <IconMail size={20}></IconMail>
                        <p className='text-[14px] font-normal'>support@oneshop.com</p>
                    </Link>
                    <Link href='tel:+8801798930232' className="flex items-center gap-2 text-white">
                        <IconPhone size={20}></IconPhone>
                        <p className='text-[14px] font-normal'>+8801798930232</p>
                    </Link>
                    <div className=""></div>
                </div>
                <div className="flex gap-3">
                    <Link className='text-white' href='https://facebook.com/absoftlab99'><IconBrandFacebook size={20}></IconBrandFacebook></Link>
                    <Link className='text-white' href='#'><IconBrandX size={20}></IconBrandX></Link>
                    <Link className='text-white' href='#'><IconBrandPinterest size={20}></IconBrandPinterest></Link>
                    <Link className='text-white' href='#'><IconBrandYoutube size={20}></IconBrandYoutube></Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
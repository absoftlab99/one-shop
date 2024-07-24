import { IconHelp, IconMoneybag, IconReplace, IconTruck } from '@tabler/icons-react';
import React from 'react';

const Info = () => {
    return (
        <div className='grid grid-cols-12 gap-10 mt-5'>
            <div className="col-span-12 md:col-span-3">
                <div className="bg-primary rounded-xl flex flex-col items-center justify-center py-5 relative overflow-hidden">
                    <IconTruck size={50} className='text-white'></IconTruck>
                    <p className='text-white'>Home Delivery</p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3">
                <div className="bg-primary rounded-xl flex flex-col items-center justify-center py-5">
                    <IconMoneybag size={50} className='text-white'></IconMoneybag>
                    <p className='text-white'>Money Back Gaurentee</p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3">
                <div className="bg-primary rounded-xl flex flex-col items-center justify-center py-5">
                    <IconReplace size={50} className='text-white'></IconReplace>
                    <p className='text-white'>7 Days Free Replacement</p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3">
                <div className="bg-primary rounded-xl flex flex-col items-center justify-center py-5">
                    <IconHelp size={50} className='text-white'></IconHelp>
                    <p className='text-white'>24 Hours Support</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
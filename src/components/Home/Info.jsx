import { IconHelp, IconCreditCardPay, IconReplace, IconTruck } from '@tabler/icons-react';
import React from 'react';

const Info = () => {
    return (
        <div className='grid grid-cols-12 gap-10 mt-5'>
            <div className="col-span-12 md:col-span-3 awesome-shadow">
                <div className="bg-primary rounded-xl flex flex-col items-center justify-center py-5 relative overflow-hidden">
                    <IconTruck stroke={1} size={50} className='text-white'></IconTruck>
                    <p className='text-white text-[20px] font-bold'>Fast Delivery</p>
                    <p className='text-[14px] text-white'>Experience Lightning-Fast Delivery</p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 awesome-shadow">
                <div className="bg-primary rounded-xl flex flex-col items-center justify-center py-5">
                    <IconCreditCardPay stroke={1} size={50} className='text-white'></IconCreditCardPay>
                    <p className='text-white text-[20px] font-bold'>Secured Payment</p>
                    <p className='text-[14px] text-white'>Shop with Confidence</p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 awesome-shadow">
                <div className="bg-primary rounded-xl flex flex-col items-center justify-center py-5">
                    <IconReplace stroke={1} size={50} className='text-white'></IconReplace>
                    <p className='text-white text-[20px] font-bold'>Replacement</p>
                    <p className='text-[14px] text-white'>1 Week free replacement gurantee</p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 awesome-shadow glass">
                <div className="bg-primary rounded-xl flex flex-col items-center justify-center py-5">
                    <IconHelp stroke={1} size={50} className='text-white'></IconHelp>
                    <p className='text-white text-[20px] font-bold'>24/7 Support</p>
                    <p className='text-[14px] text-white'>Always Here for You</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
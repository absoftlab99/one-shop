import Image from 'next/image';
import React from 'react';

const Slider = ({slider}) => {
    const {image, alt, id} = slider;
    return (
        <Image src={image} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt={alt} />
    );
};

export default Slider;
'use client'
import React from 'react';

const Button = ({props}) => {
    return (
        <button className={`btn-primary ${props.style}`} name={props.name}>
            {props.btnText}
        </button>
    );
};

export default Button;
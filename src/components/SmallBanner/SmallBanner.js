import React from 'react';
import './SmallBanner.css'

const SmallBanner = ({src}) => {
    return (
        <>
        <section className='banner-box'>
            <img src={src} alt="small-banner" />
        </section>

        </>
    )
};

export default SmallBanner;
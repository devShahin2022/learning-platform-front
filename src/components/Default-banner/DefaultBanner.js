import React from 'react';
import './DefaultBanner.css';

const DefaultBanner = ({data}) => {
    return (
        <section className='mt-10-custom-special'>
            <h2 className='display-4 text-white text-center'>{data}</h2>
        </section>
    );
};

export default DefaultBanner;
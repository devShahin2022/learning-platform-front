import React from 'react';
import './CourseBanner.css';

const CourseBanner = ({data}) => {
    return (
        <div className='courseBanner'>
            <h2 className='text-center text-white display-4'>{data}</h2>
        </div>
    );
};

export default CourseBanner;
import React from 'react';

const CountDown = () => {
    return (
        <div className='bg-primary p-3 rounded-3'>
            <h2 className='mb-3'>  40 % discount in 
            our every courses</h2>
            <div className='d-flex justify-content-between mt-3'>
                <div className='px-5 rounded-2 bg-light'>1</div>
                <div className='px-5 rounded-2 bg-light'>2</div>
                <div className='px-5 rounded-2 bg-light'>3</div>
            </div>
        </div>
    );
};

export default CountDown;
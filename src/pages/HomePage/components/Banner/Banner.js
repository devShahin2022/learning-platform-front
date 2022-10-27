import React from 'react';
import { Container } from 'react-bootstrap';
import CountDown from '../CountDown/CountDown';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section className='bg-banner-section'>
                <Container className='padding-top-20'>
                    <div className='row'>
                        <div className='col-md-7'>
                        <h1 className='text-white display-3'>WELCOME TO OUR ONLINE PLATFORM</h1>
                            <p className='lead text-white'>Try again and again | Never hopeless</p>
                            <div>
                                <button className='btn btn-light text-danger'>Perticipate our free exam</button>
                                <button className='btn mx-2 btn-light text-danger'>Contact with us</button>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            {/* <CountDown></CountDown> */}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Banner;
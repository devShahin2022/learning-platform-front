import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-dark py-4'>
           <Container>
                <div className='row'>
                    <div className='col-6 col-md-4'>
                        <p>col-1</p>
                    </div>
                    <div className='col-6 col-md-4'>
                        <p>col-2</p>
                    </div>
                    <div className='col-6 col-md-4'>
                        <p>col-3</p>
                    </div>
                </div>
                <p className='text-center text-white'>
                    Copyrights 2022 Md Shahin Alam
                </p>
            </Container> 
        </div>
    );
};

export default Footer;
import React from 'react';
import { Container } from 'react-bootstrap';
import './ExamBanner.css';

const ExamBanner = () => {
    return (
        <>
            <div className='bg-danger p-4'>
                <Container>
                    <div className='row'>
                        <div className='col-md-5'>
                            simple counter
                        </div>
                        <div className='col-md-7'>
                            exam button
                        </div>
                    </div>
                </Container>
            </div>
            {/* exam banner specifications */}
            <Container>
                <div className='row'>
                    <div className='col-md-6'>
                        Here our specification
                    </div>
                    <div className='col-md-6'>
                        Here our images
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ExamBanner;
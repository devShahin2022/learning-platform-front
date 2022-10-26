import React from 'react';
import { Container } from 'react-bootstrap';
import './ContactUs.css';
import { BsFillGeoAltFill,BsFillTelephoneFill } from "react-icons/bs";

const ContactUs = () => {
    return ( // aikhane obossoi bg image add korte hbe
        <section className='contactus-bg'> 
            <Container className='bg-white px-2 py-4 rounded-3'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='d-flex align-items-center h-100 justify-content-center'>
                            <div>
                                <h2 className='text-danger mb-3'>Find us another way</h2>
                                <div className='d-flex justify-content-between py-2 bg-light'><BsFillGeoAltFill className='text-danger fs-4'></BsFillGeoAltFill><p className='lead ms-2'>Dhaka Banani, Road 21, RRR-1</p></div>
                                <div className='d-flex justify-content-between py-2 bg-light'><BsFillGeoAltFill className='text-danger fs-4'></BsFillGeoAltFill><p className='lead ms-2'>Dhaka Gulshan, Road 31, TRS-3</p></div>
                                <div className='d-flex justify-content-between py-2 bg-light'><BsFillTelephoneFill className='text-danger fs-4'></BsFillTelephoneFill><p className='lead ms-2'>Dhaka Banani, Road 21, RRR-1</p></div>
                                <div className='d-flex justify-content-between py-2 bg-light'><BsFillTelephoneFill className='text-danger fs-4'></BsFillTelephoneFill><p className='lead ms-2'>Dhaka Gulshan, Road 31, TRS-3</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <h3 className='text-danger py-2 mb-4'>Send us mail</h3>
                        <form action="#">
                            <div className='row'>
                                <div className='col-6'>
                                    <p className='lead'>Your Name : </p>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <p className='lead'>Your Email : </p>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <p className='lead mt-4'>Type Your Message : </p>
                            <textarea className='form-control' name="" id="" cols="30" rows="6">

                            </textarea>
                            <div className='text-end my-4'>
                                <button className='btn btn-outline-danger'>Send mail</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactUs;
import React from 'react';
import { Container } from 'react-bootstrap';
import { BsFillAlarmFill, BsFillBookmarksFill, BsArrowLeftShort } from "react-icons/bs";

const CourseBody = () => {






    return (
        <Container>
            <div className='row my-5'>
                <div className='col-md-8'>
                    <p className='alert alert-danger lead'>Already we are realise number of 6 premium courses</p>
                    <div className='row'>
                        <LoadCard></LoadCard>
                    </div>
                </div>
                <div className='col-md-4 bg-light p-2'>
                    <h3 className='my-4'>Choose your best course</h3>
                    <LoadSideNav></LoadSideNav>
                </div>
            </div>
        </Container>
    );
};


// load card
const LoadCard = () =>{
    return (
        <div class='col-md-6'>
            <div className='rounded-3 bg-white my-2 border bordered-1'>
                <img className='img-fluid w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFD7GQYnkhsDqXf0tW76I9HtfuMp3LDDoBg&usqp=CAU" alt="" />
                <div className='px-2 py-4'>
                    <h5 className='me-2'>SSC physics complete study with online study group</h5>
                    <p className='lead'>This is our 3rd batch for ssc physics batch. Here you learn almost everything about physics</p>
                    <p className='lead'>Price : <del>200</del> <b>140 tk</b></p>
                    <div className='row'>
                        <div className='col-6'>
                            <button className='btn btn-danger w-100'>Join Course</button>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            <button className='btn '><BsFillAlarmFill className='text-muted me-2'></BsFillAlarmFill><span className='font-size-card-i'>3m</span></button>
                            <button className='btn '><BsFillBookmarksFill className='text-muted me-2'></BsFillBookmarksFill><span className='font-size-card-i'>Online</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// load side nav
const LoadSideNav = () => {
    return (
        <div className='my-3 d-flex justify-content-between bg-danger rounded-2 align-items-center'>
            <BsArrowLeftShort className='text-white me-2 fs-3'></BsArrowLeftShort>
            <button className='btn btn-danger w-100'><span>What is your name</span></button>
        </div>
    );
}





export default CourseBody;
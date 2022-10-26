import React from 'react';
import { Container } from 'react-bootstrap';
import { BsFillAlarmFill, BsFillBookmarksFill, BsArrowLeftShort } from "react-icons/bs";
import { useLoaderData } from 'react-router-dom';
import './CourseBody.css';

const CourseBody = () => {
    const loaderCourseData = useLoaderData();
    console.log(loaderCourseData);
    return (
        <Container>
            <div className='row my-5'>
                <div className='col-md-8'>
                    <p className='alert alert-danger lead'>Already we are realised number of {loaderCourseData.length} premium courses</p>
                    <div className='row'>
                        {
                            loaderCourseData.map((item) => <LoadCard key={item.id} item={item}></LoadCard> )
                        }
                        
                    </div>
                </div>
                <div className='col-md-4 bg-light p-2'>
                    <h3 className='my-4'>Choose your best course</h3>
                    {
                        loaderCourseData.map((item) => <LoadSideNav key={item.id} item={item}></LoadSideNav> )
                    }
                    <br></br>
                    <hr />
                    <div className='mt-4'>
                        <h3>Our recent  courses</h3>
                        <div className='coursePage-carousel'>
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
                                {
                                loaderCourseData.map((item) => <RealisedCourseCarousel key={item.id} item={item}></RealisedCourseCarousel> )
                                }
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};


// load card
const LoadCard = ({item}) =>{
    return (
        <div class='col-md-6'>
            <div className='rounded-3 bg-white my-2 border bordered-1'>
                <img className='img-fluid w-100' src={item.thumbnail} alt="" />
                <div className='px-2 py-4'>
                    <h5 className='me-2'>{item.courseName}</h5>
                    <p className='lead'>{item.courseDetails.slice(0,100)}...</p>
                    <p className='lead'>Price : <del>{item.courseFee}</del><small> -{item.discount}% </small> <b>{parseInt(item.courseFee - (item.courseFee*(item.discount/100)))} {item.currency}</b></p>
                    <div className='row'>
                        <div className='col-6'>
                            <button className='btn btn-danger w-100'>Join Course</button>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            <button className='btn '><BsFillAlarmFill className='text-muted me-2'></BsFillAlarmFill><span className='font-size-card-i'>{item.duration}m</span></button>
                            <button className='btn '><BsFillBookmarksFill className='text-muted me-2'></BsFillBookmarksFill><span className='font-size-card-i'>{item.type}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// load side nav
const LoadSideNav = ({item}) => {
    return (
        <div className='my-3 d-flex justify-content-between bg-danger rounded-2 align-items-center'>
            <BsArrowLeftShort className='text-white me-2 fs-3'></BsArrowLeftShort>
            <button className='btn btn-danger w-100'><span>{item.courseName}</span></button>
        </div>
    );
}

const RealisedCourseCarousel = ({item}) =>{
    return(
        <>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={item.thumbnail} className="d-block w-100 h-100" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{item.subject}</h5>
                        <p>{item.courseName}</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default CourseBody;
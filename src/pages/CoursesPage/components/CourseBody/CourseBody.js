import React from 'react';
import { Container } from 'react-bootstrap';
import { BsFillAlarmFill, BsFillBookmarksFill, BsArrowLeftShort,BsArrowRight } from "react-icons/bs";
import { Link, useLoaderData } from 'react-router-dom';
import './CourseBody.css';
import Slider from "react-slick";

const CourseBody = () => {
    const loaderCourseData = useLoaderData();
    // //console.log(loaderCourseData);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
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
                        <Slider {...settings}>
                            {
                                loaderCourseData.map(item => {
                                    return(
                                        <div key={item.id}>
                                            <img className='w-100 h-100' src={item.thumbnail} alt="" />
                                            <div className='mt-2 d-flex justify-content-between'>
                                                <h4>{item.subject}</h4>
                                                <Link to={"/courses/"+item.id}><button className='btn btn-sm btn-danger'><BsArrowRight className='fs-3'></BsArrowRight></button></Link>   
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </Slider>
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
        <div className='col-md-6'>
            <div className='rounded-3 bg-white my-2 border bordered-1'>
                <img className='img-fluid w-100' src={item.thumbnail} alt="" />
                <div className='px-2 py-4'>
                    <h5 className='me-2'>{item.courseName}</h5>
                    <p className='lead'>{item.courseDetails.slice(0,100)}...</p>
                    <p className='lead'>Price : <del>{item.courseFee}</del><small> -{item.discount}% </small> <b>{parseInt(item.courseFee - (item.courseFee*(item.discount/100)))} {item.currency}</b></p>
                    <div className='row'>
                        <div className='col-6'>
                            <Link to={"/courses/"+item.id}><button className='btn btn-danger w-100'>See course details</button></Link>
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
        <Link to={"/courses/"+item.id} className='text-decoration-none'>
            <div className='my-3 d-flex justify-content-between bg-danger rounded-2 align-items-center'>
            <BsArrowLeftShort className='text-white me-2 fs-3'></BsArrowLeftShort>
            <button className='btn btn-danger w-100'><span>{item.courseName}</span></button>
            </div>
        </Link>
    );
}

export default CourseBody;
import { Container } from 'react-bootstrap';
import './IndetailsCourse.css';
import { BsArrowBarDown ,BsArrowRightShort,BsFillBookmarkCheckFill } from "react-icons/bs";

const IndetailsCourse = () => {
    


    return (
        <Container id="mt-10-parcent" className='rounded-3 bg-white mt-10'>
            <div className='rounded-3 d-flex justify-content-between my-3 sticky-top bg-light p-2'>
                <p className='lead'>Physics</p>
                <div className='d-flex justify-content-end'>
                    <small className='mt-3 me-2'>200 bdt</small>
                    <button className='btn btn-danger'>Buy now <BsArrowRightShort className='ms-2 fs-3 text-white'></BsArrowRightShort></button>
                    <button title="Download pdf file" className='btn btn-sm'><BsArrowBarDown className='fs-3 text-danger'></BsArrowBarDown></button>
                </div>
            </div>
            <img className='w-100 h-auto mb-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0etxEDRPdc4E_TCA0sHgBhNG1GNaVBy5CmA&usqp=CAU" alt="" />
                <div className='row'>
                    <div className='col-9'>
                        <h5 className='my-2'>Hello my name is shahin alam</h5>
                    </div>
                    <div className='col-3'>
                        <h5 className='font-weight-b'> Price : <del>200</del>-20% 400 taka </h5>
                    </div>
                </div>
                <p className='lead'>In this course we will cover whole topics which include our books . Our every course is very qualitifull.Here we has joined top famous teacher in bangladesh.Every teachers are very friendly. They are solve any types of problems. And also they are all university students.If you need  more information in our course please contact with us or join our facebook group.</p>

                <div className='row'>
                    <div className='col-6 col-lg-3' col-md-4 col-sm-4 my-2>
                       <p> Type : Online </p>
                    </div>
                    <div className='col-6 col-lg-3' col-md-4 col-sm-4 my-2>
                       <p> Seat : 200 </p>
                    </div>
                    <div className='col-6 col-lg-3' col-md-4 col-sm-4 my-2>
                       <p> Teacher : Md Shahin Alam </p>
                    </div>
                    <div className='col-6 col-lg-3' col-md-4 col-sm-4 my-2>
                       <p> Duration : 4 months </p>
                    </div>
                </div>
                <h6 className='my-4'>See Our course Facilities</h6>
                <p className='lead'><BsFillBookmarkCheckFill className='fs-3 mx-2 text-danger'></BsFillBookmarkCheckFill>Lorem ipsum dolar sit amet</p>
                <p className='lead'><BsFillBookmarkCheckFill className='fs-3 mx-2 text-danger'></BsFillBookmarkCheckFill>Lorem ipsum dolar sit amet</p>
                <p className='lead'><BsFillBookmarkCheckFill className='fs-3 mx-2 text-danger'></BsFillBookmarkCheckFill>Lorem ipsum dolar sit amet</p>
                <p className='lead'><BsFillBookmarkCheckFill className='fs-3 mx-2 text-danger'></BsFillBookmarkCheckFill>Lorem ipsum dolar sit amet</p>
                <p className='lead'><BsFillBookmarkCheckFill className='fs-3 mx-2 text-danger'></BsFillBookmarkCheckFill>Lorem ipsum dolar sit amet</p>
                <p className='lead'><BsFillBookmarkCheckFill className='fs-3 mx-2 text-danger'></BsFillBookmarkCheckFill>Lorem ipsum dolar sit amet</p>
                <div className='mb-3'>

                </div>
                <button className='btn btn-danger mb-5 mt-4'>Buy now <BsArrowRightShort className='ms-2 fs-3 text-white'></BsArrowRightShort></button>
        </Container>
    );
};

export default IndetailsCourse;
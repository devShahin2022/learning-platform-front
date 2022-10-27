import { Container } from 'react-bootstrap';
import './IndetailsCourse.css';
import { BsArrowBarDown ,BsArrowRightShort,BsFillBookmarkCheckFill } from "react-icons/bs";
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';

const IndetailsCourse = () => {
    const ref = useRef();
    const loderData = useLoaderData();
    console.log("fetch single data", loderData);
    if(loderData.length === 0){
        return <h1 className='bg-danger my-5'> No data found!!!</h1>
    }

    return (
        <Container id="mt-10-parcent" className='rounded-3 bg-white mt-10'>
            <div className='rounded-3 d-flex justify-content-between my-3 sticky-top bg-light p-2'>
                <p className='lead'>{loderData.subject}</p>
                <div className='d-flex justify-content-end'>
                    <small className='mt-3 me-2'>{loderData.courseFee - parseInt((loderData.discount/100)*loderData.courseFee)} {loderData.currency}</small>
                    <Link to={`/courses/${loderData.id}/checkout`}><button className='btn btn-danger'>Buy now <BsArrowRightShort className='ms-2 fs-3 text-white'></BsArrowRightShort></button></Link>
                    <ReactToPrint trigger={() => <button title="Download pdf file" className='btn btn-sm'><BsArrowBarDown className='fs-3 text-danger'></BsArrowBarDown></button> } content={() => ref.current}></ReactToPrint>
                </div>
            </div>
        <div ref={ref}>
            <img className='w-100 h-auto mb-4' src={loderData.thumbnail} alt="" />
                <div className='row'>
                    <div className='col-9'>
                        <h5 className='my-2'>{loderData.courseName}</h5>
                    </div>
                    <div className='col-3'>
                        <h5 className='font-weight-b'> Price : <del>{loderData.courseFee}</del>-{loderData.discount}% {loderData.courseFee - parseInt((loderData.discount/100)*loderData.courseFee)} {loderData.currency} </h5>
                    </div>
                </div>
                <p className='lead'>{loderData.courseDetails}</p>

                <div className='row'>
                    <div className='col-6 col-lg-3' col-md-4 col-sm-4 my-2>
                       <p> Type : {loderData.type} </p>
                    </div>
                    <div className='col-6 col-lg-3' col-md-4 col-sm-4 my-2>
                       <p> Seat : {loderData.seat} </p>
                    </div>
                    <div className='col-6 col-lg-3' col-md-4 col-sm-4 my-2>
                       <p> Teacher : {loderData.teacherDetails[0].name} </p>
                    </div>
                    <div className='col-6 col-lg-3' col-md-4 col-sm-4 my-2>
                       <p> Duration : {loderData.duration} months </p>
                    </div>
                </div>
                <h6 className='my-4'>See Our course Facilities</h6>
                
                    {
                        loderData.courseFacility.map((item , indx) => <CourseFeature key={indx} item={item}></CourseFeature> )
                    }
                </div>
                <Link to={`/courses/${loderData.id}/checkout`}><button className='btn btn-danger mb-5 mt-4'>Buy now <BsArrowRightShort className='ms-2 fs-3 text-white'></BsArrowRightShort></button></Link>
                
        </Container>
    );
};


const CourseFeature = ({item}) => {
    return(
        <>
            <p className='lead'><BsFillBookmarkCheckFill className='fs-3 mx-2 text-danger'></BsFillBookmarkCheckFill>{item}</p>
        
        </>
    );
}


export default IndetailsCourse;
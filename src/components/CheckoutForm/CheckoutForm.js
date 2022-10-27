import React from 'react';
import './CheckoutForm.css';
import Swal from 'sweetalert2';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CheckoutForm = () => {
    const loderData = useLoaderData();

    if(loderData.length === 0){
        return <h1>You are going on a wrong way!!!!</h1>
    }
    const handleConfirm = () => {
        Swal.fire(
            'Thank you',
            'Imidiately we will verify your information and active account',
            'success'
          )
    }

    return (
        <>
             <Container className='bg-white rounded-3 py-4 px-2 margin-top-10'>
            <div className='row'>
                <div className='col-md-6'>
                    <h2 className='alert alert-danger my-3'>Your choosen online course - Checkout now</h2>
                    <img src='' alt='' />
                    <div className='row mb-3'>
                        <div className='col-md-8'>
                            <h4>{loderData.courseName}</h4>
                        </div>
                        <div className='col-md-4 d-flex justify-content-end'>
                            <h5><del>{loderData.courseFee}</del>-{loderData.discount}% {loderData.courseFee - parseInt((loderData.discount/100)*loderData.courseFee)} {loderData.currency}</h5>
                        </div>
                    </div>
                    <img className='w-100 h-auto mb-4' src={loderData.thumbnail} alt="" />
                </div>
                <div className='col-md-6'>
                    <div className='row mb-4'>
                        <div className='col-6'>
                            <p  className='lead'>Name :</p>
                            <input className='form-control' readOnly type="text" value="md shahin alam" />
                        </div>
                        <div className='col-6'>
                            <p  className='lead'>Email :</p>
                            <input className='form-control' readOnly type="text" value="shahinsss1949@gmail.com" />
                        </div>
                    </div>
                    <p  className='lead'>Your payment method name :</p>
                    <input autoFocus className='form-control mb-3' type="text" />
                    <p  className='lead'>Your payment Phone Number :</p>
                    <input className='form-control mb-3' type="text" />
                    <p  className='lead'>Your payment Trnx id :</p>
                    <input className='form-control mb-3' type="text" />
                    <button onClick={handleConfirm} className='btn btn-danger w-100 mt-4'>Confirm join</button>
                </div>
            </div>
        </Container>
        </>
    );
};

export default CheckoutForm;
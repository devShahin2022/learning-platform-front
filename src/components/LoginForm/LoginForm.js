import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <Container>
                <form className='login-form mt-custom-10 shadow-lg rounded-3 py-4 px-2 mb-5'>
                   <h2 className='text-center '>Login</h2>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                     <button type="submit" class="btn btn-danger w-100">Login</button>
                     <div className='d-flex justify-content-between p-3'>
                        <Link to='/register' className=''>
                            New user ?
                        </Link>
                        <p  className=''>
                            Forgotten password ?
                        </p>
                     </div>
                     <div className='d-flex w-100 justify-content-center mt-2'><hr width="40%" /></div>
                     
                     <div className='d-flex justify-content-center py-4'>
                        <button className='btn btn-sm btn-primary mx-1'>Facebook</button>
                        <button className='btn btn-sm btn-danger mx-1'>Git hub</button>
                     </div>
                    </form>
               

           
        </Container>
    );
};

export default LoginForm;
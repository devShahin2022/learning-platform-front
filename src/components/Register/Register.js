import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContextInfo } from '../../Context/AuthContext';
import './Register.css';

const Register = () => {
    const {createUser} = useContext(AuthContextInfo);

    const handleRegister = (e) => {
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
            <Container className='mt-custom-10 bg-white shadow-lg rounded-3 py-4 px-2 mb-5'>
                <div className='row'>
                    <div className='col-md-8'>
                    <form onSubmit={handleRegister} className=''>
                    <h2 className='text-center '>Register free</h2>
                        <div className='row'>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label htmlFor="exampleInputEmail1" class="form-label">Full name</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label htmlFor="exampleInputEmail1" class="form-label">Image url</label>
                                    <input required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" class="form-label">Email</label>
                            <input  required name='email' type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                            <input name="password" type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                          <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Agree with <Link to='/terms-and-condition'>terms and condition</Link></label>
                        </div>
                        <button type="submit" class="btn btn-danger w-100">Register</button>
                        <div className='d-flex justify-content-end p-3'>
                            <Link to='/login'>
                                Already have an account?
                            </Link>
                        </div>                     
                    </form>
                    </div>
                    <div className='col-md-4'>
                        <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                            <button className='btn btn-primary w-100 my-2'>Login with Facebook</button>
                            <button className='btn btn-dark w-100 my-2'>Login with Github</button>
                        </div>
                    </div>
                </div>
                </Container>
    );
};

export default Register;
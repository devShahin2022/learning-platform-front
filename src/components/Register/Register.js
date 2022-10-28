import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContextInfo } from '../../Context/AuthContext';
import './Register.css';

const Register = () => {
    const {createUser, profileUpdate, providerLogin} = useContext(AuthContextInfo);

    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleLogin1 = () => {
        providerLogin(googleProvider)
        .then(result => {
            toastMessage("success");
            navigate(from,{replace: true});
        })
        .catch(error => {
            //console.log(error);
            toastMessage("error");
        });
    }

    // handle github login

    const handleGithubLogin1 = () => {
        providerLogin(githubProvider)
        .then(result => {
            toastMessage("success");
            navigate(from,{replace: true});
        })
        .catch(error => {
            //console.log(error);
            toastMessage("error");
        });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const form =e.target;
        const displayName = form.displayName.value;
        const profileURL = form.profileURL.value;
        const email = form.email.value;
        const password = form.password.value;
        if(displayName !=='' && profileURL !== '' && email !== '' && password !== ''){
            createUser(email,password)
            .then(result => {
                // const user = result.user;
                //console.log(user);
                form.reset();
                profileUpdate(displayName, profileURL)
                .then(result => {
                    toastMessage("success-profile");
                })
                .catch(error =>{
                    //console.log(error);
                    toastMessage("error");
                })
                navigate(from,{replace: true});
            })
            .catch(error => {
                console.log(error.code);
                if(error.code === "auth/email-already-in-use"){
                    toastMessage("error-used");
                }
                else if(error.code === "auth/weak-password"){
                    toastMessage("error-weak");
                }
                else{
                    toastMessage("error");
                }
            })
        }else{
            toastMessage("alertfill");
        }
    }

// toast message

const toastMessage = (status) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      if(status === "error"){
        Toast.fire({
            icon: 'error',
            title: 'error occured!'
          })
      }
      if(status === "success"){
        Toast.fire({
            icon: 'success',
            title: 'User create success'
          })
      }
      if(status === "alertfill"){
        Toast.fire({
            icon: 'success',
            title: 'Fill the all field'
          })
      }
      if(status === "success-profile"){
        Toast.fire({
            icon: 'success',
            title: 'success! please reload for see image'
          })
      }
      if(status === "error-used"){
        Toast.fire({
            icon: 'error',
            title: 'fail! email already used'
          })
      }
      if(status === "error-weak"){
        Toast.fire({
            icon: 'error',
            title: 'fail! Weak password'
          })
      }
}

    return (
            <Container className='mt-custom-10 bg-white shadow-lg rounded-3 py-4 px-2 mb-5'>
                <div className='row'>
                    <div className='col-md-8'>
                    <form onSubmit={handleRegister} className=''>
                    <h2 className='text-center '>Register free</h2>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
                                    <input required name="displayName" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Image url</label>
                                    <input required name="profileURL" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                            <input  required name='email' type="email" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input required  name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                          <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Agree with <Link to='/terms-and-condition'>terms and condition</Link></label>
                        </div>
                        <button type="submit" className="btn btn-danger w-100">Register</button>
                        <div className='d-flex justify-content-end p-3'>
                            <Link to='/login'>
                                Already have an account?
                            </Link>
                        </div>                     
                    </form>
                    </div>
                    <div className='col-md-4'>
                        <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                            <button onClick={handleGoogleLogin1} className='btn btn-primary w-100 my-2'>Login with Google</button>
                            <button onClick={handleGithubLogin1} className='btn btn-dark w-100 my-2'>Login with Github</button>
                        </div>
                    </div>
                </div>
                </Container>
    );
};

export default Register;

import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContextInfo } from '../../Context/AuthContext';
import './LoginForm.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || '/';

    const { providerLogin,signIn } = useContext(AuthContextInfo);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleLogin = () => {
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

    const handleGithubLogin = () => {
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

// handle submit
const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result => {
        const user = result.user;
        form.reset();
        //console.log(user);
        navigate(from,{replace: true});
        toastMessage("success");
    })
    .error(error => {
        //console.log(error);
        toastMessage("error occured ! Please fill the form correctly");
    });

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
            title: 'Sign in success'
          })
      }
}

    return (
        <Container>
                <form onSubmit={handleSubmit} className='login-form mt-custom-10 shadow-lg rounded-3 py-4 px-2 mb-5'>
                   <h2 className='text-center '>Login</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                     <button type="submit" className="btn btn-danger w-100">Login</button>
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
                        <button onClick={handleGoogleLogin} className='btn btn-sm btn-primary mx-1'>google</button>
                        <button onClick={handleGithubLogin}  className='btn btn-sm btn-danger mx-1'>Git hub</button>
                     </div>
                    </form>
               

           
        </Container>
    );
};

export default LoginForm;
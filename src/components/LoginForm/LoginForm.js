import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
            const user = result.user;
            console.log(user);
            navigate(from,{replace: true});
        })
        .catch(error => {
            console.log(error);
        });
    }

    // handle github login

    const handleGithubLogin = () => {
        providerLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);

            navigate(from,{replace: true});
        })
        .catch(error => {
            console.log(error);
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
        console.log(user);
        navigate(from,{replace: true});
    })
    .error(error => {
        console.log(error);
    });

}

    return (
        <Container>
                <form onSubmit={handleSubmit} className='login-form mt-custom-10 shadow-lg rounded-3 py-4 px-2 mb-5'>
                   <h2 className='text-center '>Login</h2>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                        <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                        <input name="password" type="password" class="form-control" id="exampleInputPassword1"/>
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
                        <button onClick={handleGoogleLogin} className='btn btn-sm btn-primary mx-1'>google</button>
                        <button onClick={handleGithubLogin}  className='btn btn-sm btn-danger mx-1'>Git hub</button>
                     </div>
                    </form>
               

           
        </Container>
    );
};

export default LoginForm;
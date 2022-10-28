import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillSunFill,BsFillMoonStarsFill } from "react-icons/bs";
import './Navabar.css';
import logo from "../../logo.png";
import { AuthContextInfo } from '../../Context/AuthContext';

const Navabar = () => {
    const [mode, setMode] = useState(true);
    const { user, logOut } = useContext(AuthContextInfo);
    const navigate = useNavigate();
    const navItems = [
        {
            id : 0,
            name : "Home",
            path : "/home",
        },
        {
            id : 1,
            name : "Courses",
            path : "/courses",
        },
        {
            id : 2,
            name : "Blog",
            path : "/blog",
        },
        {
            id : 2,
            name : "Faqs",
            path : "/faqs",
        },
        {
            id : 3,
            name : "Contact",
            path : "/contact",
        },
    ];
    const logout = ()=> {
        logOut();
        navigate('/');
    }

    const toggleMode = () => {
        setMode(!mode);
    }

    return (
        <Navbar collapseOnSelect expand="md" className="navBar-bg position-absolute w-100 t-0 s-0">
        <Container>
          <Link className="text-decoration-none" to="/"><img src={logo} alt="" /> Online-Tutor</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='nav-items'>
            <Nav className="ms-auto">
                {
                    navItems.map((items) => <NavOtems key={items.id} items={items}></NavOtems>)
                }
                {
                    mode ? <div style={{"width":"30px"}} className=' ms-2'>
                        <button onClick={toggleMode} title='Switch dark theme' className='me-1 btn btn-sm text-danger bg-light'>
                            <BsFillSunFill></BsFillSunFill>
                        </button>
                    </div>
                    :
                    <div className=' ms-2'>
                        <button  style={{"width":"30px"}}  onClick={toggleMode} title='Switch light theme' className='btn btn-sm bg-dark text-white'>
                            <BsFillMoonStarsFill></BsFillMoonStarsFill>
                        </button>
                    </div>

                }

                <div style={{"width":"130px"}} class='d-flex ms-4 nav-right-item rounded-3 align-items-center'>
                    {
                        user ? <>
                            <div title={user.displayName}  id='avatar'><img  style={{"width":"100%","height":"auto"}} className='rounded-circle' src={user.photoURL} alt="" /></div>
                            <button onClick={logout} className='btn btn-sm'>Logout</button>
                        </>
                        :
                        <>
                            <Link className='nav-link' to="/login">
                                Login
                            </Link>
                            <span className='vertical-bar'></span>
                            <Link className='nav-link' to="/register">
                                Register
                            </Link>
                        </>
                    }
                </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};


const NavOtems = ({items}) => {
    return (
        <>
            <Link className='nav-link' to={items.path}>
                {items.name}
            </Link>
        </>
    )
}


export default Navabar;
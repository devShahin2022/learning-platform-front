import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillSunFill,BsFillMoonStarsFill } from "react-icons/bs";
import './Navabar.css';
import logo from "../../logo.png";
import { AuthContextInfo } from '../../Context/AuthContext';

const Navabar = () => {
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
                <div className='bg-dark-toogler ms-2'>
                    <button title='Light theme' className='btn btn-sm text-danger bg-light'>
                        <BsFillSunFill></BsFillSunFill>
                    </button>
                    <button title='dark theme' className='btn text-white'>
                        <BsFillMoonStarsFill></BsFillMoonStarsFill>
                    </button>
                </div>
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
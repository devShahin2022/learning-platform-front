import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactUs from '../../components/ContactUs/ContactUs';
import DefaultBanner from '../../components/Default-banner/DefaultBanner';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import Navabar from '../../components/Navabar/Navabar';
import { AuthContextInfo } from '../../Context/AuthContext';

const LoginPage = () => {
    const {user} = useContext(AuthContextInfo);
    const navigate = useNavigate();
    if(user && user.uid ){
        return navigate('/');
    }
    return (
        <>
            <Navabar></Navabar>
            <DefaultBanner></DefaultBanner>
            <LoginForm></LoginForm>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};

export default LoginPage;
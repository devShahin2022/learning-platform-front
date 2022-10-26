import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import DefaultBanner from '../../components/Default-banner/DefaultBanner';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import Navabar from '../../components/Navabar/Navabar';

const LoginPage = () => {
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
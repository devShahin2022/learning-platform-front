import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import DefaultBanner from '../../components/Default-banner/DefaultBanner';
import Footer from '../../components/Footer/Footer';
import Navabar from '../../components/Navabar/Navabar';
import Register from '../../components/Register/Register';

const RegistrationPage = () => {
    return (
        <>
            <Navabar></Navabar>
            <DefaultBanner></DefaultBanner>
            <Register></Register>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};

export default RegistrationPage;
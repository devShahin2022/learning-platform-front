import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import DefaultBanner from '../../components/Default-banner/DefaultBanner';
import Footer from '../../components/Footer/Footer';
import Navabar from '../../components/Navabar/Navabar';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <>
            <Navabar></Navabar>
            <DefaultBanner data="Contact with us"></DefaultBanner>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};

export default ContactPage;
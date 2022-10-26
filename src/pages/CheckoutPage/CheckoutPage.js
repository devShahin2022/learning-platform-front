import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import DefaultBanner from '../../components/Default-banner/DefaultBanner';
import Footer from '../../components/Footer/Footer';
import Navabar from '../../components/Navabar/Navabar';
import './CheckoutPage.css';

const CheckoutPage = () => {
    return (
        <>
            <Navabar></Navabar>
            <DefaultBanner></DefaultBanner>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};

export default CheckoutPage;
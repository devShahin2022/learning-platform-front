import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import DefaultBanner from '../../components/Default-banner/DefaultBanner';
import Footer from '../../components/Footer/Footer';
import Navabar from '../../components/Navabar/Navabar';
import Faqs from '../HomePage/components/Faqs/Faqs';

const FaqsPage = () => {
    return (
        <>  
            <Navabar></Navabar>
            <DefaultBanner data={"Read faqs"}></DefaultBanner>
            <Faqs></Faqs>
            <ContactUs></ContactUs>
            <Footer></Footer>   
        </>
    );
};

export default FaqsPage;
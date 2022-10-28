import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactUs from '../../components/ContactUs/ContactUs';
import DefaultBanner from '../../components/Default-banner/DefaultBanner';
import Footer from '../../components/Footer/Footer';
import Navabar from '../../components/Navabar/Navabar';
import Register from '../../components/Register/Register';
import { AuthContextInfo } from '../../Context/AuthContext';

const RegistrationPage = () => {
    const {user} = useContext(AuthContextInfo);
    const navigate = useNavigate();
    if(user && user.uid ){
        return navigate('/');
    }
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
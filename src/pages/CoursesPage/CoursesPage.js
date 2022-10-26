import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import DefaultBanner from '../../components/Default-banner/DefaultBanner';
import Footer from '../../components/Footer/Footer';
import Navabar from '../../components/Navabar/Navabar';
import CourseBody from './components/CourseBody/CourseBody';
import CourseCounter from './components/CourseCounter/CourseCounter';

const CoursesPage = () => {
    return (
        <>
            <Navabar></Navabar>
            <DefaultBanner></DefaultBanner>
            <CourseCounter></CourseCounter>
            <CourseBody></CourseBody>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};

export default CoursesPage;
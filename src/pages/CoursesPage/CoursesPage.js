import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import Navabar from '../../components/Navabar/Navabar';
import CourseBanner from './components/CourseBanner/CourseBanner';
import CourseBody from './components/CourseBody/CourseBody';
// import CourseCounter from './components/CourseCounter/CourseCounter';

const CoursesPage = () => {
    return (
        <>
            <Navabar></Navabar>
            <CourseBanner data={"Explore our best courses"}></CourseBanner>
            {/* <CourseCounter></CourseCounter> */}
            <CourseBody></CourseBody>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};

export default CoursesPage;
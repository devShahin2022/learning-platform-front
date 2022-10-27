import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import Navabar from '../../components/Navabar/Navabar';
import CourseBanner from '../CoursesPage/components/CourseBanner/CourseBanner';
import IndetailsCourse from './components/IndetailsCourse/IndetailsCourse';

const CourseDetails = () => {
    return (
        <>
            <Navabar></Navabar>
            <CourseBanner data={"Details about your course"}></CourseBanner>
            <IndetailsCourse></IndetailsCourse>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};



export default CourseDetails;
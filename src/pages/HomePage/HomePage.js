import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import Navabar from '../../components/Navabar/Navabar';
import Banner from './components/Banner/Banner';
import Counter from './components/Counter/Counter';
import ExamBanner from './components/ExamBanner/ExamBanner';
import Faqs from './components/Faqs/Faqs';
import PopularCoursesSlider from './components/PopularCoursesSlider/PopularCoursesSlider';
import PrevStdReviews from './components/PrevStdReviews/PrevStdReviews';
import WhyCourse from './components/WhyOurCourse/WhyCourse';
import './HomePage.css';

const HomePage = () => {
    return (
        <>
            <Navabar></Navabar>
            <Banner></Banner>
            <Counter></Counter>
            <WhyCourse></WhyCourse>
            <ExamBanner></ExamBanner>
            <PopularCoursesSlider></PopularCoursesSlider>
            <Faqs></Faqs>
            <PrevStdReviews></PrevStdReviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};

export default HomePage;
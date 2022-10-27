import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BlogPage from '../pages/BlogPage/BlogPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import CourseDetails from '../pages/CourseDetails/CourseDetails';
import CoursesPage from '../pages/CoursesPage/CoursesPage';
import ExamPage from '../pages/ExamPage/ExamPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
    {
        path : "/",
        element : <HomePage></HomePage>
    },
    {
        path : "/home",
        element : <HomePage></HomePage>
    },
    {
        path : '/courses',
        loader: async() => fetch('https://servefron-github-ass-10.vercel.app/all-course'),
        element : <CoursesPage></CoursesPage>
    },
    {
        path : '/blog',
        element : <BlogPage></BlogPage>
    },
    {
        path : '/login',
        element : <LoginPage></LoginPage>
    },
    {
        path : '/register',
        element : <RegistrationPage></RegistrationPage>
    },
    {
        path : '/contact',
        element : <ContactPage></ContactPage>
    },
    {
        path : '/free-exam',
        element : <ExamPage></ExamPage>
    },
    // {
    //     path : '/checkout',
    //     element : <PrivateRoutes><CheckoutPage></CheckoutPage></PrivateRoutes>
    // },
    {
        path : '/profile',
        element : <ProfilePage></ProfilePage>
    },
    {
        path : '/terms-and-condition',
        element : <h1>Terms and condition page</h1>
    },
    {
        path : '/courses/:id',
        loader: async({params}) => fetch(`https://servefron-github-ass-10.vercel.app/all-course/${params.id}`),
        element : <CourseDetails></CourseDetails>
    },
    {
        path : '/courses/:id/checkout',
        loader: async({params}) => fetch(`https://servefron-github-ass-10.vercel.app/all-course/${params.id}`),
        element : <CheckoutPage></CheckoutPage>
    },
    {
        path : '*',
        element : <h1>404 page not found!</h1>
    }
]);
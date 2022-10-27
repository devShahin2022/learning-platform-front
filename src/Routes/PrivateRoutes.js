import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContextInfo } from '../Context/AuthContext';

const PrivateRoutes = ({children}) => {
    const {user, loading } = useContext(AuthContextInfo);
    console.log(user);
    const location = useLocation();
    if(loading){
        return <h1>Loading...</h1>
    }

    if(user && user.uid){
        return children;
    }else{
        return <Navigate to='/login' state={{from : location }} replace></Navigate>
    }
};

export default PrivateRoutes;
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const info = false;
    const location = useLocation();
    if(info){
        return children;
    }else{
        return <Navigate to='/login' state={{from : location }} replace></Navigate>
    }
};

export default PrivateRoutes;
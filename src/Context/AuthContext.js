import React, { createContext } from 'react';

export const AuthContextInfo = createContext();






const AuthContext = ({children}) => {
    const username = {displayName : "Md Shahin Alam"};

    const authInfo = {username};





    return (
        <AuthContextInfo.Provider value={authInfo}>
            {children}
        </AuthContextInfo.Provider>
    );
};

export default AuthContext;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Config';

// create context
export const AuthContextInfo = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    const providerLogin = (provider) =>{
        return signInWithPopup(auth,provider);
    }


// create user
const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}
// create profile
const profileUpdate = (fullName,userPhotoUrl)=>{
    setLoading(true);
    return updateProfile(auth.currentUser,{
        displayName : fullName,
        photoURL : userPhotoUrl
    });
}

// sign in
const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword( auth,email,password);
}
// logout

const logOut = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
}

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(currentUser) => {
            //console.log("user inside state change",currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        } 

    },[]);




    const authInfo = {loading, user, providerLogin, createUser, signIn ,logOut ,profileUpdate};
    return (
        <AuthContextInfo.Provider value={authInfo}>
            {children}
        </AuthContextInfo.Provider>
    );
};

export default AuthContext;

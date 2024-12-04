import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const googleLogin = () => {
           return signInWithPopup(auth, provider)
    }

    const signup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const updateUserProfile = (updatedProfileData) => {
        return updateProfile(auth.currentUser, updatedProfileData) 
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const reset = (email) => {

        return sendPasswordResetEmail(auth, email);
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            // console.log(currentUser);
            
      })

      return () => {
        unSubscribe();
      }

    },[])






    const userInfo ={
        user,
        setUser,
        loading,
        setLoading,
        signup,
        login,
        updateUserProfile,
        signout,
        googleLogin,
        reset
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export  {AuthProvider, AuthContext};
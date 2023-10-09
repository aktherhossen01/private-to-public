/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleAuthProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)


    const signUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
const googleSignIn =()=>{
    return signInWithPopup(auth, googleAuthProvider)
}

    const signout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const createLogin =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo ={
        user,
        signUp,
        createLogin,
        signout,
        loading,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebse/firebse.init";

const googleProvider=new GoogleAuthProvider
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
// create
const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
//login
const NewUserLogin = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
//logiut
const logOut = ()=>{
    setLoading(true)
    return signOut (auth)
}
//login google
const loginWithGoogle=()=>{
    setLoading(true)
    signInWithPopup(auth,googleProvider)
}
useEffect(()=>{
    const unsubsCribe =onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log( 'state captured',currentUser)
        setLoading(false)
    })
    return()=>{
        unsubsCribe()
    }
},[])
    const info={
user,
setUser,
loading,
createUser,
NewUserLogin,
logOut,
loginWithGoogle
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
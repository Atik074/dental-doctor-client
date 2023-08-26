import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


  export const AuthContext = createContext(null)
  const auth = getAuth(app) 
  const githubProvider = new GithubAuthProvider()
  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()

const AuthProvider = ({children}) => {
  const [user , setUser] = useState(null) 
  const [loading ,setLoading] = useState(true)


 const createUser = (email ,password) =>{
     setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
   

  }

  const signInUser =(email,password)=>{
      setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
    }

// github authentication
   const githubUser =()=>{
        setLoading(true)
       return  signInWithPopup(auth , githubProvider)
    }

// google authentication 
   const googleUser =()=>{
       setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }

// facebook auth

const facebookUser = ()=>{
   return signInWithPopup(auth , facebookProvider)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          console.log('current user ' , currentUser)
           setUser(currentUser)
           setLoading(false)
        })
    return ()=>{
      return unsubscribe();
    }
    },[])



    const authinfo ={
         user ,
         loading,
         createUser,
         signInUser,
         githubUser ,
         googleUser ,
         facebookUser
     }

    return (
       <AuthContext.Provider value={authinfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
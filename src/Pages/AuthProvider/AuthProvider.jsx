import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


  export const AuthContext = createContext(null)
  const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user , setUser] = useState(null) 
  const [loading ,setLoading] = useState(true)


 const createUser = (email ,password) =>{
   return createUserWithEmailAndPassword(auth,email,password)

  }

  const signInUser =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
    }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          console.log('current user ' , currentUser)
        })
    return ()=>{
      return unsubscribe();
    }
    },[])




    const authinfo ={
         user ,
         loading,
         createUser,
         signInUser
     }

    return (
       <AuthContext.Provider value={authinfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
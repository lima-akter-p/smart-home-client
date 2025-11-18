import React, { useEffect } from 'react';

import { AuthContex } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, reload, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
import UseData from '../Hook/UseData';

  const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const {setLoading,setUser,user,loading} = UseData();
    // console.log(user,loading);

    const updateUser = async (updatedObj) => {
    setLoading(true);

    return updateProfile(auth.currentUser, updatedObj)
      .then(() => {
        return reload(auth.currentUser);
      })
      .then(() => {
        setUser(auth.currentUser);
      })
      .finally(() => {
        setLoading(false);
      });
  };
    

    const createUser = (email, password) => {
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth,email,password )
       
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

  

    



    const signInUser = (email,password )=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const logOut =() =>{
        return signOut(auth);
    }



    useEffect(() =>{
        const unbscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            setLoading(false)

        })
        return() =>{
            unbscribe();
        }

    }, [])

    const  authInfo = {
        user,
        createUser,
        signInUser,
        setUser,
        logOut,
        updateUser,
        signInWithGoogle,
        loading,
        setLoading
        

    }
    return (
        <AuthContex value = {authInfo}>
            {children}

        </AuthContex>
    );
};

export default AuthProvider;



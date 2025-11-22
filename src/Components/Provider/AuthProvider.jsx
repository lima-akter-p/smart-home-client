import React, { useEffect, useState } from "react";

import { AuthContex } from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    reload,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);

    const updateUser = async (updatedObj) => {
        setUserLoading(true);

        return updateProfile(auth.currentUser, updatedObj)
            .then(() => {
                return reload(auth.currentUser);
            })
            .then(() => {
                setUser(auth.currentUser);
            })
            .finally(() => {
                setUserLoading(false);
            });
    };

    const createUser = (email, password) => {
        setUserLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setUserLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signInUser = (email, password) => {
        setUserLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unbscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setUserLoading(false);
        });
        return () => {
            unbscribe();
        };
    }, [setUser, setUserLoading]);

    const authInfo = {
        user,
        createUser,
        signInUser,
        setUser,
        logOut,
        updateUser,
        signInWithGoogle,
        userLoading,
        setUserLoading,
    };
    return <AuthContex value={authInfo}>{children}</AuthContex>;
};

export default AuthProvider;


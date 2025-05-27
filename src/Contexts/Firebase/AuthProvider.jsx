import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUSer = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
               
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser ? "Logged in:" : "Logged out:", currentUser);
            } else {
                setUser(null);
                console.log("No user", user);
                setLoading(false);
            }
            // setUser(currentUser || null);
            // setLoading(false);
            // console.log(currentUser ? "Logged in:" : "Logged out:", currentUser);
        });
        return ()=> unSubscribe();
    }, [])

    const userInfo = {
        createUser,
        signInUSer,
        logOut,
        setLoading,
        loading,
        user
    }
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
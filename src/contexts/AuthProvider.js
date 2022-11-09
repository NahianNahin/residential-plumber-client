import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // For  User Create by Email Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // For  User login by Email Password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update User info
    const updateUserInfo = profile => {
        return updateProfile(auth.currentUser, profile);
    }
    // For Manage user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    // For Logout 
    const logout = () => {
        signOut(auth).then(() => {
            console.log('Sign-out successful.');
        }).catch((error) => {
            console.log(error);
        });
    }

    const AuthData = {
        user,
        loading,
        createUser,
        login,
        updateUserInfo,
        logout
    }
    return (
        <div>
            <AuthContext.Provider value={AuthData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
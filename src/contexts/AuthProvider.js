import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // For  User Create by Email Password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // For  User login by Email Password
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // For Google Sign In 
    const googleProvider = new GoogleAuthProvider();
    const googlelogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
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
        localStorage.removeItem('plumber-token');
        setLoading(true)
        signOut(auth).then(() => {
            toast.success('Sign-out successful.');
            
            
        }).catch((error) => {
            console.log(error);
        });
    }

    const AuthData = {
        user,
        loading,
        setLoading,
        createUser,
        login,
        googlelogIn,
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
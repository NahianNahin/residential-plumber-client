import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

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
            return updateProfile(auth.currentUser,profile);
        }


    const AuthData = {
        createUser,
        login,
        updateUserInfo
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
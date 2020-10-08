import React, { useEffect, useState } from "react";
// import firebaseConfig from "../setupFirebase";
import firebase from 'firebase';

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider 
            value={{
                currentUser
            }}
        >
            {children}

        </AuthContext.Provider>
    );
};

export const AuthContext = React.createContext();
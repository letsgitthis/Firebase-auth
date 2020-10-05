import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

let uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],

    callbacks: {
        signInSuccessWithAuthResults: async (authResult) => {
            const userInfo = authResult.additionalUserInfo;
            if(userInfo.isNewUser && userInfo.providerId === 'password') {
                try {
                    await authResult.user.sendEmailVerification();
                    console.log('Check your email');
                } catch (e) {
                    console.log(e);
                }
            }
            return false;
        }
    }
};

function signOut() {
    firebase.auth().signOut().then(function() {
        console.log("You are logged out");
    }).catch(function () {
        console.log("Error on log out");
    })
};

function Signup() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const authObserver = firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        });
        return authObserver;
    })

    console.log(user);

    if(user) {
        return (
            <>
            <p>Welcome, {user.displayName} </p>
            <button onClick={signOut}>Sign out</button>
            </>
        )
    } else {
        return (
            <>
            <div>Sign up / Register</div>
            <StyledFirebaseAuth 
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
            />
            </>
        )
    }
};

export default Signup;
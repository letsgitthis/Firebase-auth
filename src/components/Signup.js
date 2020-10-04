import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

let uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
}

function Signup() {
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

export default Signup;
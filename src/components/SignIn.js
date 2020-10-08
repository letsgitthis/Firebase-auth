import React, { useContext, useCallback } from "react";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { withRouter, Redirect } from "react-router";
import firebase from "firebase";
// import app from "../setupFirebase";
import { AuthContext } from "../context/Auth";

const SignIn = ({ history }) => {
  const handleSignup = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        // either use onAuthStateChanged or replace with
        // EmailAuthProvider && GoogleAuthProvider
        await firebase
          .auth()
          .signUpWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  // let uiConfig = {
  //   signInFlow: "popup",
  //   signInOptions: [
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //   ],
  // };

  // console.log(user);

  const { currentUser } = useContext(AuthContext);

  // state changes here, set it to athenticate routes
  if (currentUser) {
    return (
      <>
        {/* <p>Welcome, {user.displayName} </p>
        <button onClick={signOut}>Sign out</button> */}
        <Redirect to="/" />
      </>
    );
  } else {
    return (
      <>
        {/* <div>Sign up / Register</div>
        <StyledFirebaseAuth
          // uiConfig={uiConfig}
          // sign in method may change to correct this for now
          onsubmit={handleSignup}
          firebaseAuth={firebase.auth()}
        /> */}
        <div>
          <h1>Log in</h1>
          <form onSubmit={handleSignup}>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button type="submit">Log in</button>
          </form>
        </div>
      </>
    );
  }
};

export default withRouter(SignIn);

// function SignIn() {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const authObserver = firebase.auth().onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     console.log(authObserver);
//     return authObserver;
//   });

//   //import React, { useState, useEffect } from "react";
//   let uiConfig = {
//     signInFlow: "popup",
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     ],

//     callbacks: {
//       signInSuccessWithAuthResults: async (authResult) => {
//         const userInfo = authResult.additionalUserInfo;
//         if (userInfo.isNewUser && userInfo.providerId === "password") {
//           try {
//             await authResult.user.sendEmailVerification();
//             console.log("Check your email");
//           } catch (e) {
//             console.log(e);
//           }
//         }
//         return false;
//       },
//     },

//   };

// function signOut() {
//   firebase
//     .auth()
//     .signOut()
//     .then(function () {
//       console.log("You are logged out");
//     })
//     .catch(function () {
//       console.log("Error on log out");
//     });
// }

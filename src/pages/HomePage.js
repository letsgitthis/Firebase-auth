import React from 'react';
import app from "../setupFirebase";

function HomePage() {
    return (
        <>
        <h1>I am the Home Page</h1>
        <button onClick={() => app.auth().signOut()}>Log out</button>
        </>
    );
};

export default HomePage;
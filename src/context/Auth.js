import React, { useEffect, useState } from "react";
import app from "../setupFirebase";

export const AuthContext = React.createContext();

// this may cause .auth().onStateChange in Authentication to become obsolete
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onStateChanged((user) => {
      setCurrentUser(user)
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthProvider;
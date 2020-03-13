import React, { useEffect, useState } from "react";
import app from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    var email = window.localStorage.getItem('emailForSignIn');

    if (app.auth().isSignInWithEmailLink(window.location.href)) {
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      app
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then(function(result) {
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch(function(error) {
          alert(error);
        });
    }

    app.auth().onAuthStateChanged(setCurrentUser);
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

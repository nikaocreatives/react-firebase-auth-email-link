import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {

  const handleLogin = useCallback(
    async event => {
      // Added
      var actionCodeSettings = {
        url: "http://localhost:3000/login",
        handleCodeInApp: true
      };

      event.preventDefault();
      const { email } = event.target.elements;
      try {
        await app
          .auth()
          .sendSignInLinkToEmail(email.value, actionCodeSettings);
        window.localStorage.setItem("emailForSignIn", email.value);
        history.push("/activate");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);

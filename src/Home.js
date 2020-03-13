import React from "react";
import app from "./base";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => alert(app.auth().currentUser.email)}>Show Email</button>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;

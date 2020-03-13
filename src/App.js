import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { ActivatePage } from "./Activate.page"
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/activate" component={ActivatePage} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

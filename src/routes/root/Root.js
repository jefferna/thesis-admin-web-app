import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;

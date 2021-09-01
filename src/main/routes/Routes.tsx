import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "~/modules/About/About";
import Landing from "~/modules/Landing/Landing";
import ToDos from "~/modules/ToDos/ToDos";
import ToDo from "~/modules/ToDos/ToDo/ToDo";
import Users from "~/modules/Landing/Users/Users";
import User from "~/modules/Landing/Users/User/User";

export default function Routes({ children }) {
  return (
    <Router>
      {children}
      <Switch>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/todo/:id">
          <ToDo />
        </Route>
        <Route path="/todos">
          <ToDos />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

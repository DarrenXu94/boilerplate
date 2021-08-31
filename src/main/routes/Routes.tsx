import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "~/modules/About/About";
import Landing from "~/modules/Landing/Landing";
import ToDos from "~/modules/ToDos/ToDos";
import ToDo from "~/modules/ToDo/ToDo";

export default function Routes() {
  return (
    <Router>
      <Switch>
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

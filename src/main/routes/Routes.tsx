import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "~/modules/About/About";
import Landing from "~/modules/Landing/Landing";

export default function Routes() {
  return (
    <Router>
      <Switch>
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

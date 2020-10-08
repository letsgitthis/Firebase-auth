import React from "react";
// import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import RandomPage from "./pages/RandomPage";
import NavbarTabs from "../src/components/NavbarTabs";

function Navigation() {
  return (
    <Router>
      <div className="App">
        <NavbarTabs />
        <Switch>
          <Route exact path="/signuppage" component={SignupPage} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/randompage" component={RandomPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;

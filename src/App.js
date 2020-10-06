import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import RandomPage from "./pages/RandomPage";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/signuppage" component={SignupPage} />
            <ProtectedRoute exact path="/homepage" component={HomePage} />
            <Route exact path="/randompage" component={RandomPage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;

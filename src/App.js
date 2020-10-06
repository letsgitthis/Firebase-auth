import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import RandomPage from "./pages/RandomPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Switch>
            <Route exact path="/signuppage" component={SignupPage} />
            <Route exact path="/homepage" component={HomePage} />
            <Route exact path="/randompage" component={RandomPage} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

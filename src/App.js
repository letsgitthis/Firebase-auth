import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import RandomPage from "./pages/RandomPage";
import NavbarTabs from "./components/NavbarTabs";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/Auth";

// class App extends Component {
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavbarTabs />
          <Switch>
            <Route exact path="/signuppage" component={SignupPage} />
            <ProtectedRoute exact path="/homepage" component={HomePage} />
            <ProtectedRoute exact path="/randompage" component={RandomPage} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

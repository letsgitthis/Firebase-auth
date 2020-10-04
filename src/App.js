import React from 'react';
import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>My React / Firebase application</h2>
       <Signup />
      </header>
    </div>
  );
}

export default App;

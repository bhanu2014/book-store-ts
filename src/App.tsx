import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './Routes'
import Header from './components/header/Header'
import './App.css'

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Header/>
      </div>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
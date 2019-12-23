import React from 'react';
import logo from './logo.svg';
import { Link, Router } from '@reach/router';
import './App.scss';
import Demo from './views/Demo';
import { Styles } from './components';

function App() {
  return (
    <>
      <Styles />
      <Router>
        <Home default path="/" />
        <Demo path="/demo" />
      </Router>
    </>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/demo" className="btn mt-2">
          Demo
        </Link>
      </header>
    </div>
  );
}

export default App;

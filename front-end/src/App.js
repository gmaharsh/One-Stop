import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';

function App() {
  return (
    // <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <News />
        </div>
      </div>
    // </Router>
  );
}

export default App;

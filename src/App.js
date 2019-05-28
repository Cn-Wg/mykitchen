import React from 'react';
import Tabbar from './components/tabbar/index'
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div className="App">
    <Router>
      <Tabbar />
    </Router>
    </div>
  );
}

export default App;

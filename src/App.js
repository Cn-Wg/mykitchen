import React from 'react';
import Tabbar from './components/tabbar/index'
import {BrowserRouter as Router } from 'react-router-dom'
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

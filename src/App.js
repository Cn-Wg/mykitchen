import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Use from './components/use'
import './App.css'
function App() {
  return (
    <div className="App">
    <Router>
      <Use />
      </Router>
    </div>
  );
}

export default App;

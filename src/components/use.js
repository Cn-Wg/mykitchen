import React from 'react';
import Tabbar from './tabbar/index'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Details from './details/index'
import Search from './search/index'
import Goods from './goods/index'
function Use() {
  return (
    <div className="Use">
    <Router>
    <Route path="/details" component={Details} />
    <Route path="/search" component={Search} />
    <Route path="/goods" component={Goods} />
      <Tabbar />
    </Router>
    </div>
  );
}

export default Use;

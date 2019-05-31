import React from 'react';
import Tabbar from './tabbar/index'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Details from './details/index'
import Search from './search/index'
import Goods from './goods/index'
import Login from './login/login'
function Use() {
  return (
    <div className="Use">
    <Router>
    <Route path="/details/:id" component={Details} />
    <Route path="/search" component={Search} />
    <Route path="/goods/:id" component={Goods} />
    <Route path="/login" component={Login} />
      <Tabbar />
    </Router>
    </div>
  );
}

export default Use;

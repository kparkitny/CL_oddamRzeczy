import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/Logout' component={Logout} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Router>
  );
}
export default App;
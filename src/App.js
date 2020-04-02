import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
     <Router>
       <Switch>
         <Route exact path='/' component={Home} />
         <Route path ='*' component={PageNotFound} />
       </Switch>
     </Router>
  );
}
export default App;


// Routing wedle schematu
// ------------------------------------------
// Home (/)
// Home – Organizations (/)
// Home – Local (/)
// Home – Logged In (/)
// Form - Step 1 (/oddaj-rzeczy)
// Form - Step 2 (/oddaj-rzeczy)
// Form - Step 2 - Opened Select (/oddaj-rzeczy)
// Form - Step 3 (/oddaj-rzeczy)
// Form - Step 3 - Opened Select (/oddaj-rzeczy)
// Form - Step 4 (/oddaj-rzeczy)
// Form - Summary (/oddaj-rzeczy)
// Form - Thank You (/oddaj-rzeczy)
// Login (/logowanie)
// Register (/rejestracja)
// Logoutn (/wylogowano)
// {/*
// <Route exact path="/register" component={rejestracja} />
// <Route exact path="/login" component={logowanie} />
// <Route exact path="/logout" component={wylogowano} /> */}
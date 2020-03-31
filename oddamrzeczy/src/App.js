import React from 'react';
import Home from './components/Home';
// import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
   <>  
     <Router>
     <switch>
     <Route exact path='/' component={Home} />
     </switch>
     </Router>
   </>
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

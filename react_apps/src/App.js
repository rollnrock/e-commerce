import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/login">
          <Login/>
       </Route>
       <Route path="/signup">
          <Signup/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;

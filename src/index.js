import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './testing/reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/Landing-Page";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path = "/" component={LandingPage}/>
              <Route path = "/home" exact component={Home}/>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

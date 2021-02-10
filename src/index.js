import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './testing/reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './css/Navigation.css';

import Navigation from "./layouts/Navigation";
import LandingPage from "./pages/Landing-Page";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

ReactDOM.render(
  <React.StrictMode>
      <Router forceRefresh={true}>
          <Navigation isMobile={false}/>
          <Switch>
              <Route path = "/about" component={About}/>
              <Route path = "/projects" component={Projects}/>
              <Route path = "/contact" component={Contact}/>
              <Route exact path = "/" component={LandingPage}/>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

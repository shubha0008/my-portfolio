import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import Landing from './components/landingpage';
import About from './components/aboutme';
import Projects from './components/projects';
import Contact from './components/contact';
import Resume from './components/resume';

ReactDOM.render(
  <BrowserRouter>
<App />
  <Switch>
    {/* <Route exact path = "/" component ={Landing}/>
    <Route to="/resume"component ={Resume}/>
    <Route to="/aboutme"component ={About}/>
    <Route to="/projects"component ={Projects}/>
    <Route to="/contact"component ={Contact}/> */}
  </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
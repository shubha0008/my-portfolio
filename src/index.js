import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <BrowserRouter>
<App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
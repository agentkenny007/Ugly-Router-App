import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Base from './components/BaseLayout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <BrowserRouter>
    <Base>
      <Switch>
      <Route path='/about' component={About} />
      <Route path='/home' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/' component={Home} />
      </Switch>
    </Base>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();

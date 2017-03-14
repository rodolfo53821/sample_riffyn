import React from 'react';
import ReactDOM from 'react-dom';

import Main from '../components/Main';
import Home from '../components/Home';
import About from '../components/About';
import Distribution from '../components/Distribution';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/distribution' component={ Distribution } />
    </Route>
  </Router>,
  document.getElementById('app')
);

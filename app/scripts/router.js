import React from 'react';
import { browserHistory, Route, Router } from 'react-router';

import Home from './Pages/Home';

const router = (
  <Router history={browserHistory}>
      <Route path="/" component={Home} />
  </Router>
);

export default router;

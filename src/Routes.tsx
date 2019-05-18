import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import UsersList from './pages/UsersList';
import { store, history } from './store';

const Routes: React.FC = () => {
  return (
    <ConnectedRouter store={store} history={history}>
      <BrowserRouter>
        <Route exact path="/" component={UsersList} />
        <Route path="/:id" component={() => <div>DETAIL</div>} />
      </BrowserRouter>
    </ConnectedRouter>
  );
}

export default Routes;


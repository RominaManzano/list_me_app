import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import UsersList from './pages/UsersList';
import { store, history } from './store';

const Routes: React.FC = () => {
  return (
    <ConnectedRouter store={store} history={history}>
      <BrowserRouter>
        <Route exact={true} path="/" component={UsersList} />
      </BrowserRouter>
    </ConnectedRouter>
  );
};

export default Routes;

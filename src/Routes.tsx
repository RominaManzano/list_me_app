import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import UsersList from './pages/UsersList';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={UsersList} />
      <Route path="/:id" component={() => <div>DETAIL</div>} />
    </Switch>
  );
}

export default Routes;


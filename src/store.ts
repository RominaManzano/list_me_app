import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer,
  Store,
} from 'redux';

import reducers from './reducers/rootReducer';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [
  thunk,
  routeMiddleware,
];

const store: Store = createStore(
  combineReducers<Reducer>({
    ...reducers,
    router: routerReducer,
  }),
  compose(applyMiddleware(...middlewares))
);

export { store, history };
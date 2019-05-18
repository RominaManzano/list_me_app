import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer,
  Store,
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import reducers from './reducers/rootReducer';

const history = createHistory();
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
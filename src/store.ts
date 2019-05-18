import thunk from 'redux-thunk';
import { createBrowserHistory, History } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer,
  Store,
  Middleware,
} from 'redux';

import reducers from './reducers/rootReducer';

const history: History = createBrowserHistory();
const routeMiddleware: Middleware = routerMiddleware(history);
const middlewares: Middleware[] = [
  thunk,
  routeMiddleware,
];

const store: Store = createStore(
  combineReducers<Reducer>({
    ...reducers,
    router: routerReducer,
  }),
  compose(applyMiddleware(...middlewares)),
);

export { store, history };

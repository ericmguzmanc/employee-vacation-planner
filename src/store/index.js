import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
import { throttle } from 'lodash';
import { saveState } from '../components/localStorage';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [ thunkMiddleware, loggerMiddleware ];

// const persistedState = loadState();

const store = createStore(
  rootReducer,
  // persistedState, //
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

store.subscribe(throttle(() => {
  saveState(store.getState().auth);
}), 1000);

export default store;
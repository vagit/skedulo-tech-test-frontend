import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddle from 'redux-saga'
import jobsReducer from './store/reducers/jobs'
import resourceReducer from './store/reducers/resource'
import skeduloSaga from './store/sagas/jobs'

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose

const rootReducer = combineReducers({
  jobs: jobsReducer,
  resource: resourceReducer
})

const sagaMiddleware = createSagaMiddle()

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(skeduloSaga)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

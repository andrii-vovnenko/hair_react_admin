import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/lux/bootstrap.min.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers({

}), applyMiddleware(thunkMiddleware, promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

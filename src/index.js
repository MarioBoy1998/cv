import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from "./App";
import style from "./main.css";

import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
, document.getElementById("app"));

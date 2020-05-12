//👉 Set up store and Provider
import React from 'react';
import ReactDOM from 'react-dom';
import { optionsReducer, initialState } from "./reducers/reducerNState";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(optionsReducer, initialState);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
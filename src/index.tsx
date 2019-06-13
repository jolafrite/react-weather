import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { configureStore, history } from './store';
import App from './App';
import './common/interceptors';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <App
      store={store}
      history={history}
    />
    , document.getElementById('root')
  );
};

render();

if(module.hot && typeof module.hot.accept === 'function') {
  module.hot.accept('./App', () => {
    render();
  });
}


serviceWorker.register();

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from "history";
import { createRootReducer } from "./reducers";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

export function configureStore(initialState = {}) {
  const middlewares = applyMiddleware(...[
    routerMiddleware(history),
    thunkMiddleware,
    createLogger()
  ]);

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(middlewares)
  );

  if(module.hot && typeof module.hot.accept === 'function') {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history))
    });
  }

  return store;
}

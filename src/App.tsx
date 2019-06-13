import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import theme from './common/styles/theme';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyle from './common/styles/GlobalStyle';
import Routes from './Routes';

export interface AppProps {
  history: History;
  store: Store;
}

const App: React.FC<AppProps> = ({ history, store }) => {
  return (
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <main>
            <ConnectedRouter history={history}>
              <Route
                render={routeProps => (
                  <Routes {...routeProps} />
                )}
              />
            </ConnectedRouter>
          </main>
        </MuiThemeProvider>
      </Provider>
    </AppContainer>
  );
};

export default App;

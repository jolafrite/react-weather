import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import theme from './common/styles/theme';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/styles";
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
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </Provider>
    </AppContainer>
  );
};

export default App;

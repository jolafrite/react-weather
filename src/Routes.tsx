import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Location } from 'history';
import Loadable from 'react-loadable';
import LoadingView from './common/components/LoadingView';

export interface IRoutesProps {
  location: Location
}

const WeatherSearch = Loadable({
  loader: () => import('./modules/weathers/pages/WeatherSearchPage'/*webpackChunkName: "WeatherSearch" */),
  loading: () => <LoadingView />
});

const WeatherView = Loadable({
  loader: () => import('./modules/weathers/pages/WeatherViewPage'/* webpackChunkName: "WeatherView" */),
  loading: () => <LoadingView />
});

const Error404 = Loadable({
  loader: () => import('./modules/error/pages/Error404Page'/* webpackChunkName: "Error404" */),
  loading: () => <LoadingView />
});

const Routes: React.FC<IRoutesProps> = props => {
  const { location } = props;

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="page"
      >
        <Switch location={location}>
          <Route exact path="/" render={() => <Redirect to='/weather' />} />
          <Route path="/weather/:id(\d+)" component={WeatherView} />
          <Route path="/weather" component={WeatherSearch} />
          <Route component={Error404} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;


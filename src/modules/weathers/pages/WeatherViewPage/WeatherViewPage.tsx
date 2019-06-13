import React, { useCallback, useEffect } from 'react';
import { match } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getViewPageLoading, getViewPageError, getViewPageContent } from '../../selectors';
import { WeatherViewPageActions } from '../../actions';
import { viewPageLoadWeatherEffect } from '../../effects';
import WeatherView from '../../components/WeatherView';
import { push } from 'connected-react-router';

export interface IWeatherViewPageProps {
  match: match;
}

const WeatherViewPage: React.FC<IWeatherViewPageProps> = props => {
  const dispatch = useDispatch();
  const { match } = props;
  const { params } = match;
  const { id } = params as { id: number };

  const content = useSelector(getViewPageContent);
  const loading = useSelector(getViewPageLoading);
  const error = useSelector(getViewPageError);

  const selectWeatherId = useCallback(
    (id: number) => dispatch(WeatherViewPageActions.selectOne(id))
  , [dispatch]);

  const loadWeather = useCallback(
    (id: number) => dispatch(viewPageLoadWeatherEffect(id))
  , [dispatch]);

  const goToError404 = useCallback(
    () => dispatch(push('/not-found'))
  , [dispatch]);

  useEffect(() => {
    selectWeatherId(id)
  }, [selectWeatherId, id, goToError404])

  const goToWeatherSearchPage = useCallback(
    () => dispatch(push(`/weather`))
  , [dispatch]);
  const onSearchNewWeatherClick = () => goToWeatherSearchPage();

  useEffect(() => {
    loadWeather(id);
  }, [loadWeather, id]);

  return (
    <WeatherView
      content={content}
      loading={loading}
      error={error}
      onSearchNewWeatherClick={onSearchNewWeatherClick}
    />
  );
};

export default WeatherViewPage;

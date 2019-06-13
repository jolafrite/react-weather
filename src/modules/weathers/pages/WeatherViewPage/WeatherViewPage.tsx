import React, { useCallback, useEffect } from 'react';
import { match } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getViewPageWeather, getViewPageLoading, getViewPageError, getViewLast5DaysForecast } from '../../selectors';
import { WeatherViewPageActions } from '../../actions';
import { viewPageLoadWeatherEffect } from '../../effects';
import WeatherView from '../../components/WeatherView';
import { push } from 'connected-react-router';
import { IWeather } from '../../models';

export interface IWeatherViewPageProps {
  match: match;
}

const WeatherViewPage: React.FC<IWeatherViewPageProps> = props => {
  const dispatch = useDispatch();
  const { match } = props;
  const { params } = match;
  const { id } = params as { id: number };

  const weather = useSelector(getViewPageWeather);
  const last5DaysForecast = useSelector(getViewLast5DaysForecast);
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

  //load the weather if not in the state or if the current day version
  useEffect(() => {
    if(weather && weather.list.length > 1) return;
    loadWeather(id);
  }, [weather, loadWeather, id]);

  return (
    <WeatherView
      weather={weather}
      last5DaysForecast={last5DaysForecast}
      loading={loading}
      error={error}
      onSearchNewWeatherClick={onSearchNewWeatherClick}
    />
  );
};

export default WeatherViewPage;

import React, { useCallback, useEffect } from 'react';
import WeatherSearch from '../../components/WeatherSearch';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSearchPageLoading,
  getSearchPageError,
  getSearchPageWeathers,
  getSearchPageLoaded
} from '../../selectors';
import { searchPageSearchWeatherEffect } from '../../effects';
import { IWeather } from '../../models';
import { push } from 'connected-react-router';
import { WeatherSearchPageActions } from '../../actions';

export interface IWeatherSearchPageProps {}

const WeatherSearchPage: React.FC<IWeatherSearchPageProps> = (props) => {
  const dispatch = useDispatch();

  const loaded = useSelector(getSearchPageLoaded);
  const loading = useSelector(getSearchPageLoading);
  const error = useSelector(getSearchPageError);
  const weathers = useSelector(getSearchPageWeathers);

  const goToWeatherViewPage = useCallback(
    (id: number) => dispatch(push(`/weather/${id}`))
  , [dispatch]);

  const onSearchWeather = (query: string) => {
    if(query.trim() === '') return;
    searchWeather(query);
  };

  const onWeatherClick = (weather: IWeather) => {
    if(!weather) return;
    goToWeatherViewPage(weather.city.id);
  };

  const resetSearchState = useCallback(
    () => dispatch(WeatherSearchPageActions.reset())
  , [dispatch])

  const searchWeather = useCallback(
    (query: string) => dispatch(searchPageSearchWeatherEffect(query))
  , [dispatch]);

  useEffect(() => {
    resetSearchState();
  }, [resetSearchState]);

  return (
    <WeatherSearch
      {...props}
      onSearchWeather={onSearchWeather}
      onWeatherClick={onWeatherClick}
      loaded={loaded}
      loading={loading}
      error={error}
      weathers={weathers}
    />
  );
};

export default WeatherSearchPage;



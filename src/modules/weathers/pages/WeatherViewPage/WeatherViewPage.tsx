import React, { useCallback, useEffect } from "react";
import { match } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getViewPageLoading,
  getViewPageError,
  getViewPageWeather,
  getViewPageForecast,
  getViewPageTodayHourlyForecast,
  getViewPageNextDaysHourlyForecast,
  getViewPageNextDaysForecast
} from "../../selectors";
import { WeatherViewPageActions } from "../../actions";
import {
  viewPageLoadWeatherEffect,
  viewPageLoadForecastEffect
} from "../../effects";
import WeatherView from "../../components/WeatherView";
import { push } from "connected-react-router";

export interface IWeatherViewPageProps {
  match: match;
}

const WeatherViewPage: React.FC<IWeatherViewPageProps> = props => {
  const dispatch = useDispatch();
  const { match } = props;
  const { params } = match;
  const { id } = params as { id: number };

  const weather = useSelector(getViewPageWeather);
  const forecast = useSelector(getViewPageForecast);
  const todayHoulyForecast = useSelector(getViewPageTodayHourlyForecast);
  const nextDaysForecast = useSelector(getViewPageNextDaysForecast);
  const nextDaysHourlyForecast = useSelector(getViewPageNextDaysHourlyForecast);
  const loading = useSelector(getViewPageLoading);
  const error = useSelector(getViewPageError);

  const selectWeatherId = useCallback(
    (id: number) => dispatch(WeatherViewPageActions.selectOne(id)),
    [dispatch]
  );

  const loadWeather = useCallback(
    (id: number) => dispatch(viewPageLoadWeatherEffect(id)),
    [dispatch]
  );

  const loadForecast = useCallback(
    (id: number) => dispatch(viewPageLoadForecastEffect(id)),
    [dispatch]
  );

  const goToError404 = useCallback(() => dispatch(push("/not-found")), [
    dispatch
  ]);

  useEffect(() => {
    selectWeatherId(id);
  }, [selectWeatherId, id, goToError404]);

  const goToWeatherSearchPage = useCallback(() => dispatch(push(`/weather`)), [
    dispatch
  ]);
  const onSearchNewWeatherClick = () => goToWeatherSearchPage();

  useEffect(() => {
    !weather && loadWeather(id);
    !forecast && loadForecast(id);
  }, [weather, forecast, loadWeather, loadForecast, id]);

  return (
    <WeatherView
      weather={weather}
      forecast={forecast}
      todayHoulyForecast={todayHoulyForecast}
      nextDaysForecast={nextDaysForecast}
      nextDaysHourlyForecast={nextDaysHourlyForecast}
      loading={loading}
      error={error}
      onSearchNewWeatherClick={onSearchNewWeatherClick}
    />
  );
};

export default WeatherViewPage;

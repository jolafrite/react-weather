import React, { FC, memo, Fragment, useState, useEffect } from "react";
import {
  IWeather,
  IWeatherHourlyForecast,
  IWeatherDailyForecast,
  IWeatherForecast,
  IWeatherForecastDetails
} from "../../models";
import Layout from "../../../../common/components/Layout";
import LargeCardWeather from "../Weather/LargeCardWeather";
import { useStyles } from "./style";
import WeatherViewHeaderRight from "../WeatherViewHeaderRight";
import ForecastList from "../ForecastList";
import SmallCardForecast from "../Forecast/SmallCardForecast";
import { List, ListItem, Paper } from '@material-ui/core';

export interface IWeatherViewProps {
  weather: IWeather;
  forecast: IWeatherDailyForecast;
  todayHoulyForecast: IWeatherHourlyForecast;
  nextDaysForecast: any;
  nextDaysHourlyForecast: IWeatherDailyForecast;
  loading: boolean;
  error: boolean;
  onSearchNewWeatherClick: () => void;
}

const WeatherView: FC<IWeatherViewProps> = props => {
  const classes = useStyles();
  const {
    weather,
    todayHoulyForecast,
    nextDaysForecast,
    nextDaysHourlyForecast,
    loading
  } = props;

  const [selectedNextDay, setSelectedNextDay] = useState();

  useEffect(() => {
    if(selectedNextDay) return;

    setSelectedNextDay(
      nextDaysForecast
      && Object.keys(nextDaysForecast)[0]
    );
  }, [nextDaysForecast]);

  const onNextDayForecastClick = (forecastDetails: IWeatherForecastDetails) => {
    setSelectedNextDay(forecastDetails.period);
  }

  const weatherTemplate = () => {
    if (loading || !weather) {
      return <LargeCardWeather.Loader {...props} />;
    }

    return (
      <LargeCardWeather {...props}>
        <>
          {todayHoulyForecast && (
            <div>
              <h3>Today hourly forecast</h3>
              <ForecastList
                forecast={todayHoulyForecast}
                forecastType="hour"
              />
            </div>
          )}

          {nextDaysForecast && (
            <div>
              <h3>Next days forecast</h3>
              <span>(click on a day to see the hourly forecast)</span>
              <ForecastList
                forecast={nextDaysForecast}
                forecastType="day"
                onForecastClick={onNextDayForecastClick}
              />
            </div>
          )}

          {nextDaysHourlyForecast && selectedNextDay &&
            <div>
              <h3>Next days hourly forecast</h3>
              <ForecastList
                forecast={nextDaysHourlyForecast[selectedNextDay]}
                forecastType="hour"
              />
            </div>
          }
        </>
      </LargeCardWeather>
    );
  };

  return (
    <Layout
      header={{
        rightSlot: <WeatherViewHeaderRight {...props} />
      }}
    >
      <div className={classes.root}>
        <div className={classes.card}>{weatherTemplate()}</div>
      </div>
    </Layout>
  );
};

export default memo(WeatherView);

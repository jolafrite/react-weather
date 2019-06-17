import React, { FC, memo } from "react";
import {
  IWeather,
  IWeatherHourlyForecast,
  IWeatherDailyForecast
} from "../../models";
import Layout from "../../../../common/components/Layout";
import LargeCardWeather from "../Weather/LargeCardWeather";
import { useStyles } from "./style";
import WeatherViewHeaderRight from "../WeatherViewHeaderRight";
import ForecastList from "../ForecastList";

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

  const selectedNextDay = nextDaysForecast && Object.keys(nextDaysForecast)[0];

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
              <div>(click on a day to see the hourly forecast)</div>
              <ForecastList
                forecast={nextDaysForecast}
                forecastType="day"
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

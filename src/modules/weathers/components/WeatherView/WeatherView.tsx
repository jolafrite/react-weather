import React, { FC, memo, useState, useEffect } from "react";
import {
  IWeather,
  IWeatherHourlyForecast,
  IWeatherDailyForecast,
  IWeatherForecastDetails,
  IWeatherPredictedDaysForecast
} from "../../models";
import Layout from "../../../../common/components/Layout";
import LargeCardWeather from "../Weather/LargeCardWeather";
import { useStyles } from "./style";
import WeatherViewHeaderRight from "../WeatherViewHeaderRight";
import ForecastList from "../ForecastList";

export interface IWeatherViewProps {
  weather: IWeather | undefined;
  forecast: IWeatherDailyForecast | undefined;
  todayHoulyForecast: IWeatherHourlyForecast | undefined;
  nextDaysForecast: IWeatherPredictedDaysForecast | undefined;
  nextDaysHourlyForecast: IWeatherDailyForecast | undefined;
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
  }, [nextDaysForecast, selectedNextDay]);

  const onNextDayForecastClick = (forecastDetails: IWeatherForecastDetails) => {
    setSelectedNextDay(forecastDetails.period);
  }

  const weatherTemplate = () => {
    if (loading || !weather) {
      return <LargeCardWeather.Loader {...props} />;
    }

    return (
      <LargeCardWeather weather={weather}>
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

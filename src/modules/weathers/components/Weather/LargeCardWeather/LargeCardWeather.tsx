import { format } from "date-fns";
import React, { FC, memo } from "react";
import { useStyles } from "./style";
import { IWeatherLast5DaysForecast } from "../../../models";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress
} from "@material-ui/core";
import ForecastList from "../../HourlyForecastList";
import HourlyForecastList from "../../HourlyForecastList";
import NextDaysForecastList from "../../NextDaysForecastList";
import { pick } from "../../../../../common/utils/object";

export interface ILargeCardWeatherProps {
  city: String;
  country: String;
  forecast: IWeatherLast5DaysForecast;
}

export type ILargeCardWeatherLoaderProps = {};

export interface LargeCardWeatherFC<P = {}> extends FC<P> {
  Loader: FC<ILargeCardWeatherLoaderProps>;
}

const LargeCardWeather: LargeCardWeatherFC<ILargeCardWeatherProps> = props => {
  const classes = useStyles();
  const { city, country, forecast } = props;

  const getRandomImageId = () => Math.floor(Math.random() * (30 - 10 + 1) + 10);

  const today = format(new Date(), "YYYY-MM-DD");
  const todayIndex = Object.keys(forecast).indexOf(today);
  const nextDaysDates = Object.keys(forecast).splice(todayIndex + 1);

  const todayForecast = forecast[today];
  const nextDaysForecast = pick(forecast, nextDaysDates);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={classes.location}>
          <Typography className={classes.city}>{city}, </Typography>
          <Typography className={classes.country}>{country}</Typography>
        </div>
        <div className={classes.weather}>
          <Typography className={classes.temp}>
            {Math.round(todayForecast.temp)}°
          </Typography>
          {/* <img
            className={classes.weatherIcon}
            src={`https://openweathermap.org/img/w/${todayForecast.weather.icon}.png`}
          /> */}
        </div>

        <div>
          <Typography>
            Min: {Math.round(todayForecast.temp_min)}°
          </Typography>
          <Typography>
            Max: {Math.round(todayForecast.temp_max)}°
          </Typography>
        </div>

        <div>
          <HourlyForecastList forecasts={todayForecast.hourly} />
        </div>

        <div>
          <NextDaysForecastList forecasts={nextDaysForecast} />
        </div>
      </CardContent>
      <CardMedia
        className={classes.cover}
        image={`https://picsum.photos/id/${getRandomImageId()}/300/500`}
      />
    </Card>
  );
};

const Loader: FC<ILargeCardWeatherLoaderProps> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <CircularProgress className={classes.progress} />
      </CardContent>
    </Card>
  );
};

LargeCardWeather.Loader = memo(Loader);

export default LargeCardWeather;

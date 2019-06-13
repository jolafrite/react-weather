import { format } from 'date-fns';
import React, { FC, memo } from 'react';
import { useStyles } from './style';
import { IWeather, IWeatherLast5DaysForecast } from '../../../models';
import { Card, CardMedia, CardContent, Typography, CircularProgress } from '@material-ui/core';

export interface ILargeCardWeatherProps {
  weather: IWeather;
  last5DaysForecast: IWeatherLast5DaysForecast;
}

export type ILargeCardWeatherLoaderProps = {}

export interface LargeCardWeatherFC<P = {}> extends FC<P> {
  Loader: FC<ILargeCardWeatherLoaderProps>;
}

const LargeCardWeather: LargeCardWeatherFC<ILargeCardWeatherProps> = props => {
  const classes = useStyles();
  const { weather, last5DaysForecast } = props;

  const getRandomImageId = () => Math.floor(Math.random() * (30 - 10 + 1) + 10);
  const todayForecast = () => last5DaysForecast.dates.indexOf(format(new Date(), 'YYYY-MM-DD'));

  console.error(todayForecast());

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={classes.location}>
          <Typography className={classes.city}>{weather.city.name}, </Typography>
          <Typography className={classes.country}>{weather.city.country}</Typography>
        </div>
        <div className={classes.weather}>
          {/* <Typography className={classes.temp}>{Math.round(todayForecast.temp)}°</Typography> */}
          {/* <img
            className={classes.weatherIcon}
            src={`https://openweathermap.org/img/w/${todayForecast.weather.icon}.png`}
          /> */}
        </div>
      </CardContent>
      <CardMedia
        className={classes.cover}
        image={`https://picsum.photos/id/${getRandomImageId()}/300/500`}
      />
    </Card>
  )
}

const Loader: FC<ILargeCardWeatherLoaderProps> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <CircularProgress
          className={classes.progress}
        />
      </CardContent>
    </Card>
  );
};

LargeCardWeather.Loader = memo(Loader);

export default LargeCardWeather;

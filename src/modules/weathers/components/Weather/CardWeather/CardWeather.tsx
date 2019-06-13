import React, { FC, memo } from "react";
import { IWeather } from '../../../models';
import { Card, CardContent, Typography, CardMedia, CircularProgress } from "@material-ui/core";
import { useStyles } from "./style";

export type ICardWeatherProps = {
  weather: IWeather;
}

export type ICardWeatherLoaderProps = {}

export interface CardWeatherFC<P = {}> extends FC<P> {
  Loader: FC<ICardWeatherLoaderProps>;
}

const CardWeather: CardWeatherFC<ICardWeatherProps> = props => {
  const classes = useStyles();
  const { weather } = props;

  return (
    <Card className={classes.card}>
      {/* <CardContent className={classes.content}>
        <div className={classes.location}>
          <Typography className={classes.city}>{weather.name}, </Typography>
          <Typography className={classes.country}>{weather.sys.country}</Typography>
        </div>
        <Typography className={classes.temp}>{Math.round(weather.main.temp)}°</Typography>
      </CardContent>
      <CardMedia
        className={classes.weatherIcon}
        image={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
      /> */}
    </Card>
  );
};

const Loader: FC<ICardWeatherLoaderProps> = () => {
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

CardWeather.Loader = memo(Loader);

export default CardWeather;

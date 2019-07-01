import React, { FC, memo, ReactNode, useState } from "react";
import { useStyles } from "./style";
import { IWeather } from "../../../models";
import {
  Card,
  CardContent,
  CircularProgress,
  CardMedia,
  Typography
} from "@material-ui/core";
import { WeatherIcon } from "../../WeatherIcon";
import Temperature from "../../../molecules/Temperature";
import MinMaxTemperature from "../../../molecules/MinMaxTemperature";

export interface ILargeCardWeatherProps {
  weather: IWeather;
  children: ReactNode;
}

export type ILargeCardWeatherLoaderProps = {};

export interface LargeCardWeatherFC<P = {}> extends FC<P> {
  Loader: FC<ILargeCardWeatherLoaderProps>;
}

const LargeCardWeather: LargeCardWeatherFC<ILargeCardWeatherProps> = props => {
  const classes = useStyles();
  const { weather, children } = props;

  const [randomCoverId] = useState(
    Math.floor(Math.random() * (100 - 10 + 1) + 10)
  );

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={`https://picsum.photos/id/${randomCoverId}/1600/700`}
      />

      <CardContent className={classes.content}>
        <div className={classes.header}>
          <div className={classes.headerTop}>
            <Typography className={classes.today_in}>
              Today in {weather.name}, {weather.country}
            </Typography>

            <Typography className={classes.today_date}>
              {new Date(weather.date).toLocaleDateString()}
            </Typography>
          </div>

          <div className={classes.badge}>
            <div className={classes.weatherIcon}>
              <WeatherIcon id={weather.weather.id} />
            </div>

            <div className={classes.tempsContainer}>
              <div className={classes.tempContainer}>
                <Temperature
                  direction="column"
                  size="large"
                  value={weather.main.temp}
                />
              </div>

              <MinMaxTemperature
                direction="column"
                max={weather.main.temp_max}
                min={weather.main.temp_min}
              />
            </div>

            <Typography className={classes.description}>
              {weather.weather.description}
            </Typography>
          </div>

          <div className={classes.headerBottom}>
            <Typography className={classes.wind}>
              Wind: {weather.wind.speed}
            </Typography>
          </div>
        </div>

        <div className={classes.childrenContainer}>{children}</div>
      </CardContent>
    </Card>
  );
};

const Loader: FC<ILargeCardWeatherLoaderProps> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <CircularProgress className={classes.progress} />
      </CardContent>
    </Card>
  );
};

LargeCardWeather.Loader = memo(Loader);

export default LargeCardWeather;

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
import { numberToStringTemperature } from "../../../../../common/utils/number";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import { WeatherIcon } from "../../WeatherIcon";

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
        image={`https://picsum.photos/id/${randomCoverId}/700/500`}
      />

      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Typography className={classes.today_is}>
            Today is {weather.name}, {weather.country}
          </Typography>

          <div className={classes.weather}>
            <div className={classes.tempsContainer}>
              <Typography className={classes.temp}>
                {numberToStringTemperature(weather.main.temp)}
              </Typography>

              <div className={classes.tempMinMaxContainer}>
                <div className={classes.tempMaxContainer}>
                  <ArrowUpward />
                  <Typography className={classes.tempMax}>
                    {numberToStringTemperature(weather.main.temp_max)}
                  </Typography>
                </div>

                <div className={classes.tempMinContainer}>
                  <ArrowDownward />
                  <Typography className={classes.tempMin}>
                    {numberToStringTemperature(weather.main.temp_min)}
                  </Typography>
                </div>
              </div>
            </div>

            <div className={classes.weatherIconContainer}>
              <WeatherIcon id={weather.weather.id} />
            </div>
            <Typography className={classes.description}>
              {weather.weather.description}
            </Typography>
          </div>

          <div className={classes.headerBottomContainer}>
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

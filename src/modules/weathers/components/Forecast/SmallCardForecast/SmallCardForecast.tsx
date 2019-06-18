import React, { FC } from "react";
import {
  Card,
  Typography,
  CardContent,
  CardActionArea
} from "@material-ui/core";
import { useStyles } from "./style";
import { numberToStringTemperature } from "../../../../../common/utils/number";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import { IWeatherForecastDetails, IWeatherForecastType } from "../../../models";
import { getDateWeekDay } from "../../../../../common/utils/date";
import WeatherIcon from "../../WeatherIcon";

export interface ISmallCardForecast {
  forecastDetails: IWeatherForecastDetails;
  forecastType: IWeatherForecastType;
  onClick?: (forecastDetails: IWeatherForecastDetails) => void;
}

const SmallCardForecast: FC<ISmallCardForecast> = props => {
  const classes = useStyles();
  const { forecastDetails, forecastType, onClick } = props;

  const cardContent = (
    <CardContent className={classes.content}>
      <Typography className={classes.period}>
        {forecastType === "day"
          ? getDateWeekDay(forecastDetails.period)
          : forecastDetails.period}
      </Typography>

      <Typography className={classes.temp}>
        {numberToStringTemperature(forecastDetails.main.temp)}
      </Typography>

      <div className={classes.weatherIconContainer}>
        <WeatherIcon id={forecastDetails.weather.id} />
      </div>

      <Typography className={classes.tempMax}>
        {forecastDetails.weather.description}
      </Typography>

      <div className={classes.tempMinMaxWrapper}>
        <div className={classes.tempMaxWrapper}>
          <ArrowUpward />
          <Typography className={classes.tempMax}>
            {numberToStringTemperature(forecastDetails.main.temp_max)}
          </Typography>
        </div>

        <div className={classes.tempMinWrapper}>
          <ArrowDownward />
          <Typography className={classes.tempMin}>
            {numberToStringTemperature(forecastDetails.main.temp_min)}
          </Typography>
        </div>
      </div>
    </CardContent>
  );

  return (
    <Card className={classes.root}>
      {onClick
        ? <CardActionArea onClick={() => onClick(forecastDetails)}>{cardContent}</CardActionArea>
        : cardContent
      }
    </Card>
  );
};

export default SmallCardForecast;

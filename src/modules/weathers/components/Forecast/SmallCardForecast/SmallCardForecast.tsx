import React, { FC } from "react";
import { Card, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { numberToStringTemperature } from "../../../../../common/utils/number";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import { IWeatherForecastDetails, IWeatherForecastType } from "../../../models";
import { getDateWeekDay } from "../../../../../common/utils/date";

export interface ISmallCardForecast {
  forecastDetails: IWeatherForecastDetails;
  forecastType: IWeatherForecastType;
}

const SmallCardForecast: FC<ISmallCardForecast> = props => {
  const classes = useStyles();
  const { forecastDetails, forecastType } = props;

  return (
    <Card className={classes.root}>
      <Typography className={classes.period}>
        {(forecastType === 'day')
          ? getDateWeekDay(forecastDetails.period)
          : forecastDetails.period
        }
      </Typography>

      <Typography className={classes.temp}>
        {numberToStringTemperature(forecastDetails.main.temp)}
      </Typography>

      <img
        alt={forecastDetails.weather.main}
        src={`https://openweathermap.org/img/w/${forecastDetails.weather.icon}.png`}
      />

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
          <Typography
            className={classes.tempMin}
          >
            {numberToStringTemperature(forecastDetails.main.temp_min)}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default SmallCardForecast;

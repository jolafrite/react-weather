import React, { FC } from "react";
import { IWeatherForecast } from "../../models";
import { useStyles } from "./style";

export interface IHourlyForecastListProps {
  forecasts: { [time: string]: IWeatherForecast };
}

const HourlyForecastList: FC<IHourlyForecastListProps> = props => {
  const { forecasts } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Object.keys(forecasts).map(time => (
        <div key={time}>
          <div>{time}</div>
          <div>{forecasts[time].temp}</div>
          <div>min: {forecasts[time].temp_min}</div>
          <div>max: {forecasts[time].temp_max}</div>
        </div>
      ))}
    </div>
  );

}

export default HourlyForecastList;

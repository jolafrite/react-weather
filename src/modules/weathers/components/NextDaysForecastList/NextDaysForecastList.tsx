import React, { FC } from "react";
import { IWeatherForecast, IWeatherDailyForecast } from "../../models";
import { useStyles } from "./style";

export interface INextDaysForecastListProps {
  forecasts: { [date: string]: IWeatherDailyForecast };
}

const NextDaysForecastList: FC<INextDaysForecastListProps> = props => {
  const { forecasts } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Object.keys(forecasts).map(date => (
        <div key={date}>
          <div>{date}</div>
          <div>{forecasts[date].temp}</div>
          <div>min: {forecasts[date].temp_min}</div>
          <div>max: {forecasts[date].temp_max}</div>
        </div>
      ))}
    </div>
  );

}

export default NextDaysForecastList;

import React, { FC } from "react";
import { IWeatherDailyForecast } from "../../models";
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
          <div>{new Date(date).toLocaleDateString(undefined, { weekday: 'long' })}</div>
          <div>{Math.round(forecasts[date].temp)}</div>
          <div>min: {Math.round(forecasts[date].temp_min)}</div>
          <div>max: {Math.round(forecasts[date].temp_max)}</div>
        </div>
      ))}
    </div>
  );

}

export default NextDaysForecastList;

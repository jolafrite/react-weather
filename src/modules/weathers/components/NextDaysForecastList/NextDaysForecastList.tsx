import React, { FC, Fragment } from "react";
import { IWeatherDailyForecast } from "../../models";
import { useStyles } from "./style";
import SmallCardForecast from "../Forecast/SmallCardForecast";

export interface INextDaysForecastListProps {
  forecasts: { [date: string]: IWeatherDailyForecast };
}

const NextDaysForecastList: FC<INextDaysForecastListProps> = props => {
  const { forecasts } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Object.keys(forecasts).map(date => (
        <Fragment key={date}>
          <SmallCardForecast
            period={new Date(date).toLocaleDateString(undefined, { weekday: 'long' })}
            temp={forecasts[date].temp}
            temp_min={forecasts[date].temp_min}
            temp_max={forecasts[date].temp_max}
          />
        </Fragment>
      ))}
    </div>
  );

}

export default NextDaysForecastList;

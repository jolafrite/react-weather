import React, { FC, Fragment } from "react";
import { IWeatherForecast } from "../../models";
import { useStyles } from "./style";
import SmallCardForecast from "../Forecast/SmallCardForecast";

export interface IHourlyForecastListProps {
  forecasts: { [time: string]: IWeatherForecast };
}

const HourlyForecastList: FC<IHourlyForecastListProps> = props => {
  const { forecasts } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Object.keys(forecasts).map(time => (
        <Fragment key={time}>
          <SmallCardForecast
            period={time}
            temp={forecasts[time].temp}
            temp_min={forecasts[time].temp_min}
            temp_max={forecasts[time].temp_max}
          />
        </Fragment>
      ))}
    </div>
  );

}

export default HourlyForecastList;

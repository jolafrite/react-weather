import React, { FC, Fragment } from "react";
import { useStyles } from "./style";
import SmallCardForecast from "../Forecast/SmallCardForecast";
import { IWeatherHourlyForecast, IWeatherPredictedDaysForecast, IWeatherForecastType } from "../../models";

export interface IForecastListProps {
  forecast: IWeatherHourlyForecast | IWeatherPredictedDaysForecast;
  forecastType: IWeatherForecastType;
}

const HourlyForecastList: FC<IForecastListProps> = props => {
  const { forecast } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {forecast && Object.keys(forecast).map(period => (
        <Fragment key={period}>
          <SmallCardForecast
            {...props}
            forecastDetails={forecast[period]}
          />
        </Fragment>
      ))}
    </div>
  );

}

export default HourlyForecastList;

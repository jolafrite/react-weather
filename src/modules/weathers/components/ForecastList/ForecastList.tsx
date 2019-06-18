import React, { FC, Fragment } from "react";
import { useStyles } from "./style";
import SmallCardForecast from "../Forecast/SmallCardForecast";
import { IWeatherHourlyForecast, IWeatherPredictedDaysForecast, IWeatherForecastType, IWeatherForecastDetails } from "../../models";

export interface IForecastListProps {
  forecast: IWeatherHourlyForecast | IWeatherPredictedDaysForecast;
  forecastType: IWeatherForecastType;
  onForecastClick?: (forecast: IWeatherForecastDetails) => void;
}

const HourlyForecastList: FC<IForecastListProps> = props => {
  const { forecast, onForecastClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {forecast && Object.keys(forecast).map(period => (
        <Fragment key={period} >
          <SmallCardForecast
            {...props}
            forecastDetails={forecast[period]}
            onClick={() => onForecastClick && onForecastClick(forecast[period])}
          />
        </Fragment>
      ))}
    </div>
  );

}

export default HourlyForecastList;

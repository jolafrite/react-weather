import React, { FC } from "react";
import {
  Card,
  Typography,
  CardContent,
  CardActionArea,
  Grid
} from "@material-ui/core";
import { useStyles } from "./style";
import { IWeatherForecastDetails, IWeatherForecastType } from "../../../models";
import { getDateWeekDay } from "../../../../../common/utils/date";
import WeatherIcon from "../../WeatherIcon";
import Temperature from "../../../molecules/Temperature";
import MinMaxTemperature from "../../../molecules/MinMaxTemperature/MinMaxTemperature";

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

      <div className={classes.weatherIconContainer}>
        <WeatherIcon id={forecastDetails.weather.id} />
      </div>

      <Grid container direction="row" alignItems="center">
        <Grid item xs={4}>
          <Temperature direction="column" value={forecastDetails.main.temp} />
        </Grid>

        <Grid item xs={8}>
          <MinMaxTemperature
            max={forecastDetails.main.temp_max}
            min={forecastDetails.main.temp_min}
          />
        </Grid>
      </Grid>

      <Typography>{forecastDetails.weather.description}</Typography>
    </CardContent>
  );

  return (
    <Card className={classes.root}>
      {onClick ? (
        <CardActionArea onClick={() => onClick(forecastDetails)}>
          {cardContent}
        </CardActionArea>
      ) : (
        cardContent
      )}
    </Card>
  );
};

export default SmallCardForecast;

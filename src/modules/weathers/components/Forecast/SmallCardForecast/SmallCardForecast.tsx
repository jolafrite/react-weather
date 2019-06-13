import React, { FC } from "react";
import { Card, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { numberToStringTemperature } from "../../../../../common/utils/number";

export interface ISmallCardForecast {
  period: string;
  temp: number;
  temp_max: number;
  temp_min: number;
}

const SmallCardForecast: FC<ISmallCardForecast> = props => {
  const classes = useStyles();
  const { period, temp, temp_min, temp_max } = props;

  return (
    <Card className={classes.root}>
      <Typography className={classes.period}>{period}</Typography>
      <Typography className={classes.temp}>{numberToStringTemperature(temp)}</Typography>
      <Typography>
        Max: {numberToStringTemperature(temp_max)}°
      </Typography>
      <Typography>
        Min: {numberToStringTemperature(temp_min)}°
      </Typography>
    </Card>
  );
};

export default SmallCardForecast;

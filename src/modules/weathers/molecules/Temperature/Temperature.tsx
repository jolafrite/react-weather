import React, { FC } from "react";
import { Typography, Grid } from "@material-ui/core";
import { toFahrenheit } from "../../../../common/utils/number";
import clsx from "clsx";
import { useStyles } from "./style";

export interface ITemperatureProps {
  value: number;
  className?: string;
  direction?: "row" | "column";
  separator?: string | null;
  size?: "small" | "large" | "normal";
}

const Temperature: FC<ITemperatureProps> = props => {
  const { className, separator, direction, value, size } = props;
  const classes = useStyles();

  const celcius = value.toFixed(1);
  const fahrenheit = toFahrenheit(value).toFixed(1);

  return (
    <Grid className={clsx(className, size, classes.root)} container direction={direction}>
      <>
        <Typography className="text__celcius">{celcius}°C</Typography>
        {separator && (
          <Typography className="text__separator">{separator}</Typography>
        )}
        <Typography className="text__fahrenheit">{fahrenheit}F</Typography>
      </>
    </Grid>
  );
};

Temperature.defaultProps = {
  direction: "row"
};

export default Temperature;

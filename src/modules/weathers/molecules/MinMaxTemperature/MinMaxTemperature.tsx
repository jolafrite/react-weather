import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import Temperature from "../Temperature";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";

export interface IMinMaxTemperatureProps {
  max: number;
  min: number;
  className?: string;
  direction?: "row" | "column";
  size?: "small" | "large" | "normal";
}

const MinMaxTemperature: FC<IMinMaxTemperatureProps> = props => {
  const { max, min, className, direction, size } = props;

  return (
    <Grid container className={clsx(className)} direction={direction}>
      <Grid item container direction="row" alignItems="center">
        <Grid item>
          <ArrowUpward />
        </Grid>
        <Grid item>
          <Temperature direction="column" size={size} value={max} />
        </Grid>
      </Grid>

      <Grid item container direction="row" alignItems="center">
        <Grid item>
          <ArrowDownward />
        </Grid>
        <Grid item>
          <Temperature direction="column" size={size} value={min} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MinMaxTemperature;

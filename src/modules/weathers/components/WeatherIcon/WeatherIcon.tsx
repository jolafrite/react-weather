import React, { FC, memo } from "react";

export interface IWeatherIconProps {
  id: number;
}

export const WeatherIcon: FC<IWeatherIconProps> = props => {
  const { id } = props;

  return <i className={`owf owf-${id}`}></i>;
};

export default memo(WeatherIcon);

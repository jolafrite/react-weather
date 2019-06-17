import React, { FC, memo } from 'react';
import { Avatar, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { numberToStringTemperature } from '../../../../../common/utils/number';
import { WeatherIcon } from '../../WeatherIcon';
import { IWeather } from '../../../models';

export interface IListItemWeatherProps {
  weather: IWeather;
}

const ListItemWeather: FC<IListItemWeatherProps> = props => {
  const classes = useStyles();
  const { weather } = props;

  return (
    <>
      <ListItemAvatar>
        <div className={classes.weatherIconContainer}>
          <WeatherIcon id={weather.weather.id} />
        </div>
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className={classes.location}>
            <Typography>{weather.name}, </Typography>
            <Typography>{weather.country}</Typography>
          </div>
        }
        secondary={
          <Typography className={classes.temp}>{numberToStringTemperature(weather.main.temp)}°</Typography>
        }
      />
    </>
  )
};

export default memo(ListItemWeather);

import React, { FC, memo } from 'react';
import { ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { WeatherIcon } from '../../WeatherIcon';
import { IWeather } from '../../../models';
import Temperature from '../../../molecules/Temperature';

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
          <Temperature direction="row" separator="/" value={weather.main.temp} />
        }
      />
    </>
  )
};

export default memo(ListItemWeather);

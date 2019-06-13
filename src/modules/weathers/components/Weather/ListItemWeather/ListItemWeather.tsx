import React, { FC, memo } from 'react';
import { Avatar, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { IWeather } from '../../../models';

export interface IListItemWeatherProps {
  weather: IWeather
}

const ListItemWeather: FC<IListItemWeatherProps> = props => {
  const classes = useStyles();
  const { weather } = props;

  return (
    <>
      <ListItemAvatar>
        <Avatar
          className={classes.weatherIcon}
          src={`https://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className={classes.location}>
            <Typography>{weather.city.name}, </Typography>
            <Typography>{weather.city.country}</Typography>
          </div>
        }
        secondary={
          <Typography className={classes.temp}>{Math.round(weather.list[0].main.temp)}°</Typography>
        }
      />
    </>
  )
};

export default memo(ListItemWeather);

import React, { FC, memo } from 'react';
import { Avatar, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { IWeather } from '../../../models';

export interface IListItemWeatherProps {
  city: string;
  country: string;
  icon: string;
  temp: number;
}

const ListItemWeather: FC<IListItemWeatherProps> = props => {
  const classes = useStyles();
  const { city, country, icon, temp } = props;

  return (
    <>
      <ListItemAvatar>
        <Avatar
          className={classes.weatherIcon}
          src={`https://openweathermap.org/img/w/${icon}.png`}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className={classes.location}>
            <Typography>{city}, </Typography>
            <Typography>{country}</Typography>
          </div>
        }
        secondary={
          <Typography className={classes.temp}>{Math.round(temp)}°</Typography>
        }
      />
    </>
  )
};

export default memo(ListItemWeather);

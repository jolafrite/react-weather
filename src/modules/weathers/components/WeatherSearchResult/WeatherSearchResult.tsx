import React, { FC } from 'react';
import { IWeather } from '../../models';
import ListItemWeather from '../Weather/ListItemWeather';
import { List, ListItem } from '@material-ui/core';

export interface IWeatherSearchResultProps {
  weathers: IWeather[];
  onItemClick: (weather: IWeather) => void;
}

const WeatherSearchResult: FC<IWeatherSearchResultProps> = props => {
  const { weathers, onItemClick } = props;
  return (
    <List component="div" aria-label="List of weathers">
      {weathers.map(weather => (
        <ListItem
          key={weather.id}
          button
          component="a"
          onClick={() => onItemClick(weather)}
        >
          <ListItemWeather weather={weather} />
        </ListItem>
      ))}
    </List>
  );
};

export default WeatherSearchResult;

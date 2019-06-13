import React, { FC, memo } from 'react'
import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useStyles } from './style';

export interface WeatherViewHeaderRight {
  onSearchNewWeatherClick: () => void;
}

const WeatherViewHeaderRight: FC<WeatherViewHeaderRight> = props => {
  const classes = useStyles();
  const { onSearchNewWeatherClick } = props;

  return (
    <IconButton
      aria-label="Search a new weather"
      className={classes.searchIconButton}
      onClick={onSearchNewWeatherClick}
    >
      <Search
        className={classes.searchIcon}
      />
    </IconButton>
  );
};

export default memo(WeatherViewHeaderRight);

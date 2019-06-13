import React, { FC, memo } from 'react';
import { IWeather } from '../../models';
import Layout from '../../../../common/components/Layout';
import { List, ListItem, Paper } from '@material-ui/core';
import ListItemWeather from '../Weather/ListItemWeather';
import WeatherSearchForm from '../WeatherSearchForm';
import { useStyles } from './style';

export interface IWeatherSearchProps {
  onSearchWeather: (query: string) => void;
  onWeatherClick: (weather: IWeather) => void;
  weathers: IWeather[];
  loaded: boolean;
  loading: boolean;
  error: boolean;
}

const WeatherSearch: FC<IWeatherSearchProps> = props => {
  const classes = useStyles();
  const { onSearchWeather, onWeatherClick, weathers, error, loaded } = props;

  const listTemplate = (
    <List
      component="div"
      aria-label="List of weathers"
    >
      {weathers.map(weather => (
        <ListItem
          key={weather.city.id}
          button
          component="a"
          onClick={() => onWeatherClick(weather)}
        >
          <ListItemWeather
            weather={weather}
          />
        </ListItem>
      ))}
    </List>
  );

  const errorTemplate = (
    <div className={classes.error}>
      <div>The search failed,</div>
      <div>please check your Internet connection and try again</div>
    </div>
  );

  const notFoundTemplate = (
    <div className={classes.notFound}>
      <div>Result not found</div>
    </div>
  );

  return (
    <Layout>
      <div className={classes.root}>
        <Paper>
          <WeatherSearchForm
            {...props}
            onSubmit={onSearchWeather}
          />

          {error && (
            errorTemplate
          )}

          {loaded && weathers.length === 0 && (
            notFoundTemplate
          )}

          {weathers.length !== 0 && (
            listTemplate
          )}
        </Paper>
      </div>
    </Layout>
  )
};

export default memo(WeatherSearch);

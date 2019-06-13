import React, { FC, memo } from 'react';
import { IWeatherViewPageContent } from '../../models';
import Layout from '../../../../common/components/Layout';
import LargeCardWeather from '../Weather/LargeCardWeather';
import { useStyles } from './style';
import WeatherViewHeaderRight from '../WeatherViewHeaderRight';

export interface IWeatherViewProps {
  content: IWeatherViewPageContent;
  loading: boolean;
  error: boolean;
  onSearchNewWeatherClick: () => void;
}

const WeatherView: FC<IWeatherViewProps> = props => {
  const classes = useStyles();
  const { content, loading } = props

  const weatherTemplate = () => {
    if(loading || !content) {
      return (
        <LargeCardWeather.Loader
          {...props}
        />
      );
    }

    return (
      <LargeCardWeather
        {...content}
        {...props}
      />
    );
  }

  return (
    <Layout
      header={{
        rightSlot: <WeatherViewHeaderRight {...props} />
      }}
    >
      <div className={classes.root}>
        <div className={classes.card}>
          {weatherTemplate()}
        </div>
      </div>
    </Layout>
  )
};

export default memo(WeatherView);

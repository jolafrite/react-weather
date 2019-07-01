import React, { FC, memo } from "react";
import { IWeather } from "../../models";
import Layout from "../../../../common/components/Layout";
import { Paper } from "@material-ui/core";
import WeatherSearchForm from "../WeatherSearchForm";
import { useStyles } from "./style";
import WeatherSearchResult from "../WeatherSearchResult";

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

  return (
    <Layout>
      <div className={classes.root}>
        <Paper>
          <WeatherSearchForm {...props} onSubmit={onSearchWeather} />

          {error && (
            <div className={classes.error}>
              <div>The search failed,</div>
              <div>please check your Internet connection and try again</div>
            </div>
          )}

          {loaded && weathers.length === 0 && (
            <div className={classes.notFound}>
              <div>Result not found</div>
            </div>
          )}

          {weathers.length > 0 && (
            <WeatherSearchResult
              weathers={weathers}
              onItemClick={onWeatherClick}
            />
          )}
        </Paper>
      </div>
    </Layout>
  );
};

export default memo(WeatherSearch);

export interface IWeather {
  id: number;
  name: string;
  country: string;
  dt: number;
  dt_txt: string;
  date: string;
  time: string;
  main: IWeatherMain;
  weather: IWeatherWeather;
  wind: IWeatherWind;
}

export interface IWeatherForecast {
  id: number;
  forecast: IWeatherDailyForecast;
}

export interface IWeatherDailyForecast {
  [day: string]: IWeatherHourlyForecast;
}

export interface IWeatherHourlyForecast {
  [hour: string]: IWeatherForecastDetails;
}

export interface IWeatherForecastDetails {
  period: string;
  main: IWeatherMain;
  weather: IWeatherWeather;
  wind: IWeatherWind;
}

export interface IWeatherPredictedDaysForecast {
  [day: string]: IWeatherForecastDetails;
}

export interface IWeatherMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure?: number;
  humidity?: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
}

export interface IWeatherWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherWind {
  speed: number;
  deg: number;
  gust?: number
}

export interface IWeatherClouds {
  all: number
}

export interface IWeatherRain {
  "1h"?: number;
  "3h"?: number;
}

export interface IWeatherSnow {
  "1h"?: number;
  "3h"?: number;
};

export type IWeatherForecastType = 'day' | 'hour';

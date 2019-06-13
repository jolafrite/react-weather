export interface IFetchWeather extends IWeather {}

export interface IWeather {
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
  };
  cnt: number;
  list: IWeatherList[];
};

export interface IWeatherList {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
    temp_kf: number;
  };
  weather: IWeatherListWeather[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  dt_txt: string;
};

export interface IWeatherListWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherViewPageContent {
  city: string;
  country: string;
  forecast: IWeatherLast5DaysForecast
}

export interface IWeatherLast5DaysForecast {
  [date: string]: IWeatherDailyForecast;
}

export interface IWeatherDailyForecast extends IWeatherForecast {
  hourly: {
    [time: string]: IWeatherForecast;
  }
}

export interface IWeatherForecast {
  temp: number;
  temp_max: number;
  temp_min: number;
}

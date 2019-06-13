export interface ISearchWeatherFetchResponse {
  message:	string;
  cod:	number
  count:	number
  list: ISearchWeather[]
}

export interface ISearchWeather {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grnd_level: number;
    temp_kf: number;
  };
  dt: number;
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string
  };
  rain: {
    "1h": number;
    "3h": number;
  };
  snow: {
    "1h": number;
    "3h": number;
  };
  clouds: {
    all: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string
  }[];
}

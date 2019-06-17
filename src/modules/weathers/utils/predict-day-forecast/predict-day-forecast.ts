import { IWeatherHourlyForecast, IWeatherWeather } from "../../models";
import { predictForecastWeather } from "../predict-forecast-weather/predict-forecast-weather";

interface IPredictDayForecastResult {
  temp: number | null;
  temp_max: number | null;
  temp_min: number | null;
  weatherCounter: { [id: string]: number };
  weathers: { [id: string]: IWeatherWeather };
  weather?: IWeatherWeather | null;
}

export const predictDayForecast = (hourlyForecast: IWeatherHourlyForecast) => {
  const prediction: IPredictDayForecastResult = {
    temp: null,
    temp_max: null,
    temp_min: null,
    weatherCounter: {},
    weathers: {},
  };

  const hours = Object.keys(hourlyForecast);
  const numberHours = hours.length;

  return hours.reduce((saved, hour, index) => {
    const forecast = hourlyForecast[hour];
    const weather = forecast.weather;

    const temp = !saved.temp
      ? forecast.main.temp
      : saved.temp + forecast.main.temp;

    const temp_max = !saved.temp_max
      ? forecast.main.temp
      : Math.max(saved.temp_max, forecast.main.temp);

    const temp_min = !saved.temp_min
      ? forecast.main.temp
      : Math.min(saved.temp_min, forecast.main.temp);

    const weathers = {
      ...saved.weathers,
      [weather.id]: weather
    };

    const currentWeatherIdCounter = (saved.weatherCounter[weather.id])
      ? saved.weatherCounter[weather.id]
      : 0;

    const weatherCounter = {
      ...saved.weatherCounter,
      [weather.id]: currentWeatherIdCounter + 1
    };

    const result = {
      temp,
      temp_max,
      temp_min,
      weathers,
      weatherCounter,
    };

    if(index < numberHours - 1) {
      return result;
    }

    //if last row calculate the temp and the wind speed and weather
    return {
      ...result,
      temp: getAverageTemp(result.temp, numberHours),
      weather: predictForecastWeather(result.weatherCounter, result.weathers),
    };
  }, prediction);
};

const getAverageTemp = (totalTemp: number, numberHours: number) => {
  return Number((totalTemp / numberHours).toFixed(2));
};


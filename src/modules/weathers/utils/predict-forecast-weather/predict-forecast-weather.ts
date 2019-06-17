import { IWeatherWeather } from "../../models";

/**
 * Perdict the weather
 * find the most recurrent
 *   if equal number of instance,
 *     pick the worse icon number (Higher is the icon number worse is the weather)
 *       if same icon pick the worse id
 */
export const predictForecastWeather = (
  weatherCounter: { [id: string]: number },
  weathers: { [id: string]: IWeatherWeather }
) => {
  const predictedId = Object.keys(weatherCounter).reduce((predictedId, id) => {
    const predictedIdCounter = weatherCounter[predictedId];
    const idCounter = weatherCounter[id];

    if(idCounter !== predictedIdCounter) {
      return idCounter > predictedIdCounter
        ? id
        : predictedId;
    };

    const currentWeather = weathers[id];
    const currentIconLevel = Number((currentWeather.icon.match(/\d+/g)));
    const predictedWeather = weathers[predictedId];
    const predictedIconLevel = Number((predictedWeather.icon.match(/\d+/g)));

    if(currentIconLevel !== predictedIconLevel) {
      return currentIconLevel > predictedIconLevel
      ? id
      : predictedId;
    }

    if(id !== predictedId) {
      return id > predictedId
        ? id
        : predictedId
    }

    return predictedId;
  });

  return weathers[predictedId];
};

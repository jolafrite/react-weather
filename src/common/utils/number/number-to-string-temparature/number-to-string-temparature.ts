import { toFahrenheit } from "../to-fahrenheit/to-fahrenheit";

export const numberToStringTemperature = (temperature: number) => {
  const celcius = Math.round(temperature)
  const fahrenheit = Math.round(toFahrenheit(temperature));

  return `${celcius}°/${fahrenheit}F`
};

import { useFixtureFactory } from "../../../../common/utils/test";
import { ILoad5DaysWeatherForecastFetchResponse } from "../../fetch";

export const load5DaysWeatherForecastFetchResponseFixture = useFixtureFactory<
  ILoad5DaysWeatherForecastFetchResponse
>({
  cod: "200",
  message: 0.0055,
  cnt: 40,
  list: [
    {
      dt: 1560675600,
      main: {
        temp: 28.61,
        temp_min: 28.61,
        temp_max: 29.07,
        pressure: 1004.58,
        sea_level: 1004.58,
        grnd_level: 998.17,
        humidity: 63,
        temp_kf: -0.46
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: { all: 84 },
      wind: { speed: 5.7, deg: 111.264 },
      sys: { pod: "d" },
      dt_txt: "2019-06-16 09:00:00"
    },
    {
      dt: 1560686400,
      main: {
        temp: 26.44,
        temp_min: 26.44,
        temp_max: 26.79,
        pressure: 1006.33,
        sea_level: 1006.33,
        grnd_level: 999.93,
        humidity: 79,
        temp_kf: -0.35
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
      ],
      clouds: { all: 79 },
      wind: { speed: 5.64, deg: 110.461 },
      sys: { pod: "n" },
      dt_txt: "2019-06-16 12:00:00"
    },
    {
      dt: 1560697200,
      main: {
        temp: 26.68,
        temp_min: 26.68,
        temp_max: 26.91,
        pressure: 1007.65,
        sea_level: 1007.65,
        grnd_level: 1001.02,
        humidity: 79,
        temp_kf: -0.23
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
      ],
      clouds: { all: 65 },
      wind: { speed: 6.15, deg: 105.122 },
      sys: { pod: "n" },
      dt_txt: "2019-06-16 15:00:00"
    },
    {
      dt: 1560708000,
      main: {
        temp: 26.8,
        temp_min: 26.8,
        temp_max: 26.92,
        pressure: 1006.43,
        sea_level: 1006.43,
        grnd_level: 1000.05,
        humidity: 81,
        temp_kf: -0.12
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
      ],
      clouds: { all: 82 },
      wind: { speed: 4.31, deg: 96.253 },
      sys: { pod: "n" },
      dt_txt: "2019-06-16 18:00:00"
    },
    {
      dt: 1560718800,
      main: {
        temp: 26.43,
        temp_min: 26.43,
        temp_max: 26.43,
        pressure: 1005.99,
        sea_level: 1005.99,
        grnd_level: 999.33,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.19, deg: 91.63 },
      sys: { pod: "n" },
      dt_txt: "2019-06-16 21:00:00"
    },
    {
      dt: 1560729600,
      main: {
        temp: 27.15,
        temp_min: 27.15,
        temp_max: 27.15,
        pressure: 1007.16,
        sea_level: 1007.16,
        grnd_level: 1000.73,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.38, deg: 82.081 },
      sys: { pod: "d" },
      dt_txt: "2019-06-17 00:00:00"
    },
    {
      dt: 1560740400,
      main: {
        temp: 29.09,
        temp_min: 29.09,
        temp_max: 29.09,
        pressure: 1007.49,
        sea_level: 1007.49,
        grnd_level: 1001.08,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.61, deg: 89.503 },
      sys: { pod: "d" },
      dt_txt: "2019-06-17 03:00:00"
    },
    {
      dt: 1560751200,
      main: {
        temp: 30.8,
        temp_min: 30.8,
        temp_max: 30.8,
        pressure: 1006.26,
        sea_level: 1006.26,
        grnd_level: 999.59,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 5.27, deg: 103.161 },
      sys: { pod: "d" },
      dt_txt: "2019-06-17 06:00:00"
    },
    {
      dt: 1560762000,
      main: {
        temp: 29.53,
        temp_min: 29.53,
        temp_max: 29.53,
        pressure: 1005.27,
        sea_level: 1005.27,
        grnd_level: 998.64,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 6.3, deg: 109.551 },
      rain: { "3h": 3.75 },
      sys: { pod: "d" },
      dt_txt: "2019-06-17 09:00:00"
    },
    {
      dt: 1560772800,
      main: {
        temp: 27.85,
        temp_min: 27.85,
        temp_max: 27.85,
        pressure: 1007.11,
        sea_level: 1007.11,
        grnd_level: 1000.69,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 5.5, deg: 107.714 },
      rain: { "3h": 0.625 },
      sys: { pod: "n" },
      dt_txt: "2019-06-17 12:00:00"
    },
    {
      dt: 1560783600,
      main: {
        temp: 27.43,
        temp_min: 27.43,
        temp_max: 27.43,
        pressure: 1008.64,
        sea_level: 1008.64,
        grnd_level: 1002.09,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.1, deg: 108.559 },
      sys: { pod: "n" },
      dt_txt: "2019-06-17 15:00:00"
    },
    {
      dt: 1560794400,
      main: {
        temp: 27.4,
        temp_min: 27.4,
        temp_max: 27.4,
        pressure: 1007.42,
        sea_level: 1007.42,
        grnd_level: 1000.89,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 3.62, deg: 102.742 },
      rain: { "3h": 0.937 },
      sys: { pod: "n" },
      dt_txt: "2019-06-17 18:00:00"
    },
    {
      dt: 1560805200,
      main: {
        temp: 26.94,
        temp_min: 26.94,
        temp_max: 26.94,
        pressure: 1007.08,
        sea_level: 1007.08,
        grnd_level: 1000.49,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 90 },
      wind: { speed: 4.52, deg: 101.444 },
      rain: { "3h": 0.75 },
      sys: { pod: "n" },
      dt_txt: "2019-06-17 21:00:00"
    },
    {
      dt: 1560816000,
      main: {
        temp: 28.15,
        temp_min: 28.15,
        temp_max: 28.15,
        pressure: 1007.85,
        sea_level: 1007.85,
        grnd_level: 1001.29,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 87 },
      wind: { speed: 4.44, deg: 96.245 },
      rain: { "3h": 0.625 },
      sys: { pod: "d" },
      dt_txt: "2019-06-18 00:00:00"
    },
    {
      dt: 1560826800,
      main: {
        temp: 30.68,
        temp_min: 30.68,
        temp_max: 30.68,
        pressure: 1008.06,
        sea_level: 1008.06,
        grnd_level: 1001.7,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.45, deg: 122.994 },
      rain: { "3h": 0.812 },
      sys: { pod: "d" },
      dt_txt: "2019-06-18 03:00:00"
    },
    {
      dt: 1560837600,
      main: {
        temp: 31.68,
        temp_min: 31.68,
        temp_max: 31.68,
        pressure: 1005.95,
        sea_level: 1005.95,
        grnd_level: 999.71,
        humidity: 62,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 98 },
      wind: { speed: 5.99, deg: 161.414 },
      rain: { "3h": 0.188 },
      sys: { pod: "d" },
      dt_txt: "2019-06-18 06:00:00"
    },
    {
      dt: 1560848400,
      main: {
        temp: 30.23,
        temp_min: 30.23,
        temp_max: 30.23,
        pressure: 1005.19,
        sea_level: 1005.19,
        grnd_level: 999.11,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 5.33, deg: 165.596 },
      sys: { pod: "d" },
      dt_txt: "2019-06-18 09:00:00"
    },
    {
      dt: 1560859200,
      main: {
        temp: 29.18,
        temp_min: 29.18,
        temp_max: 29.18,
        pressure: 1006.35,
        sea_level: 1006.35,
        grnd_level: 1000.2,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.04, deg: 146.015 },
      sys: { pod: "n" },
      dt_txt: "2019-06-18 12:00:00"
    },
    {
      dt: 1560870000,
      main: {
        temp: 28.69,
        temp_min: 28.69,
        temp_max: 28.69,
        pressure: 1007.56,
        sea_level: 1007.56,
        grnd_level: 1001.24,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.07, deg: 145.724 },
      sys: { pod: "n" },
      dt_txt: "2019-06-18 15:00:00"
    },
    {
      dt: 1560880800,
      main: {
        temp: 28.35,
        temp_min: 28.35,
        temp_max: 28.35,
        pressure: 1006.55,
        sea_level: 1006.55,
        grnd_level: 1000.29,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 3.43, deg: 145.245 },
      sys: { pod: "n" },
      dt_txt: "2019-06-18 18:00:00"
    },
    {
      dt: 1560891600,
      main: {
        temp: 28.17,
        temp_min: 28.17,
        temp_max: 28.17,
        pressure: 1006.52,
        sea_level: 1006.52,
        grnd_level: 1000.27,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 2.63, deg: 142.077 },
      rain: { "3h": 1.625 },
      sys: { pod: "n" },
      dt_txt: "2019-06-18 21:00:00"
    },
    {
      dt: 1560902400,
      main: {
        temp: 29.23,
        temp_min: 29.23,
        temp_max: 29.23,
        pressure: 1007.38,
        sea_level: 1007.38,
        grnd_level: 1001.08,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 2.88, deg: 156.387 },
      rain: { "3h": 1.875 },
      sys: { pod: "d" },
      dt_txt: "2019-06-19 00:00:00"
    },
    {
      dt: 1560913200,
      main: {
        temp: 31,
        temp_min: 31,
        temp_max: 31,
        pressure: 1007.36,
        sea_level: 1007.36,
        grnd_level: 1001.2,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.32, deg: 177.174 },
      sys: { pod: "d" },
      dt_txt: "2019-06-19 03:00:00"
    },
    {
      dt: 1560924000,
      main: {
        temp: 31.38,
        temp_min: 31.38,
        temp_max: 31.38,
        pressure: 1005.15,
        sea_level: 1005.15,
        grnd_level: 999.17,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.83, deg: 184.332 },
      sys: { pod: "d" },
      dt_txt: "2019-06-19 06:00:00"
    },
    {
      dt: 1560934800,
      main: {
        temp: 30.38,
        temp_min: 30.38,
        temp_max: 30.38,
        pressure: 1003.64,
        sea_level: 1003.64,
        grnd_level: 997.61,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 5.3, deg: 176.247 },
      sys: { pod: "d" },
      dt_txt: "2019-06-19 09:00:00"
    },
    {
      dt: 1560945600,
      main: {
        temp: 29.05,
        temp_min: 29.05,
        temp_max: 29.05,
        pressure: 1004.48,
        sea_level: 1004.48,
        grnd_level: 998.53,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.19, deg: 169.942 },
      sys: { pod: "n" },
      dt_txt: "2019-06-19 12:00:00"
    },
    {
      dt: 1560956400,
      main: {
        temp: 28.65,
        temp_min: 28.65,
        temp_max: 28.65,
        pressure: 1006.29,
        sea_level: 1006.29,
        grnd_level: 1000.09,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.35, deg: 160.281 },
      sys: { pod: "n" },
      dt_txt: "2019-06-19 15:00:00"
    },
    {
      dt: 1560967200,
      main: {
        temp: 28.25,
        temp_min: 28.25,
        temp_max: 28.25,
        pressure: 1005.13,
        sea_level: 1005.13,
        grnd_level: 998.85,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 3.66, deg: 164.074 },
      sys: { pod: "n" },
      dt_txt: "2019-06-19 18:00:00"
    },
    {
      dt: 1560978000,
      main: {
        temp: 28.15,
        temp_min: 28.15,
        temp_max: 28.15,
        pressure: 1005.1,
        sea_level: 1005.1,
        grnd_level: 998.77,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 70 },
      wind: { speed: 3.02, deg: 166.47 },
      rain: { "3h": 0.438 },
      sys: { pod: "n" },
      dt_txt: "2019-06-19 21:00:00"
    },
    {
      dt: 1560988800,
      main: {
        temp: 29.02,
        temp_min: 29.02,
        temp_max: 29.02,
        pressure: 1006.12,
        sea_level: 1006.12,
        grnd_level: 999.94,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 82 },
      wind: { speed: 4.37, deg: 190.618 },
      rain: { "3h": 1.25 },
      sys: { pod: "d" },
      dt_txt: "2019-06-20 00:00:00"
    },
    {
      dt: 1560999600,
      main: {
        temp: 30.35,
        temp_min: 30.35,
        temp_max: 30.35,
        pressure: 1006.32,
        sea_level: 1006.32,
        grnd_level: 1000.26,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 98 },
      wind: { speed: 5.17, deg: 196.868 },
      sys: { pod: "d" },
      dt_txt: "2019-06-20 03:00:00"
    },
    {
      dt: 1561010400,
      main: {
        temp: 31.25,
        temp_min: 31.25,
        temp_max: 31.25,
        pressure: 1004.05,
        sea_level: 1004.05,
        grnd_level: 997.98,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 99 },
      wind: { speed: 5.14, deg: 192.522 },
      sys: { pod: "d" },
      dt_txt: "2019-06-20 06:00:00"
    },
    {
      dt: 1561021200,
      main: {
        temp: 30.65,
        temp_min: 30.65,
        temp_max: 30.65,
        pressure: 1002.68,
        sea_level: 1002.68,
        grnd_level: 996.63,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: { all: 72 },
      wind: { speed: 5.03, deg: 186.912 },
      sys: { pod: "d" },
      dt_txt: "2019-06-20 09:00:00"
    },
    {
      dt: 1561032000,
      main: {
        temp: 29.43,
        temp_min: 29.43,
        temp_max: 29.43,
        pressure: 1003.8,
        sea_level: 1003.8,
        grnd_level: 997.63,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
      ],
      clouds: { all: 72 },
      wind: { speed: 4.43, deg: 175.339 },
      sys: { pod: "n" },
      dt_txt: "2019-06-20 12:00:00"
    },
    {
      dt: 1561042800,
      main: {
        temp: 28.87,
        temp_min: 28.87,
        temp_max: 28.87,
        pressure: 1004.87,
        sea_level: 1004.87,
        grnd_level: 998.67,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 98 },
      wind: { speed: 4.56, deg: 178.277 },
      rain: { "3h": 0.062 },
      sys: { pod: "n" },
      dt_txt: "2019-06-20 15:00:00"
    },
    {
      dt: 1561053600,
      main: {
        temp: 28.45,
        temp_min: 28.45,
        temp_max: 28.45,
        pressure: 1003.8,
        sea_level: 1003.8,
        grnd_level: 997.52,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 99 },
      wind: { speed: 4.94, deg: 189.193 },
      rain: { "3h": 0.376 },
      sys: { pod: "n" },
      dt_txt: "2019-06-20 18:00:00"
    },
    {
      dt: 1561064400,
      main: {
        temp: 28.28,
        temp_min: 28.28,
        temp_max: 28.28,
        pressure: 1003.73,
        sea_level: 1003.73,
        grnd_level: 997.51,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 98 },
      wind: { speed: 5.75, deg: 203.588 },
      rain: { "3h": 1.812 },
      sys: { pod: "n" },
      dt_txt: "2019-06-20 21:00:00"
    },
    {
      dt: 1561075200,
      main: {
        temp: 29.08,
        temp_min: 29.08,
        temp_max: 29.08,
        pressure: 1004.77,
        sea_level: 1004.77,
        grnd_level: 998.52,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 93 },
      wind: { speed: 4.9, deg: 199.832 },
      rain: { "3h": 1.313 },
      sys: { pod: "d" },
      dt_txt: "2019-06-21 00:00:00"
    },
    {
      dt: 1561086000,
      main: {
        temp: 30.35,
        temp_min: 30.35,
        temp_max: 30.35,
        pressure: 1005.17,
        sea_level: 1005.17,
        grnd_level: 999.26,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 6.12, deg: 204.114 },
      rain: { "3h": 1.188 },
      sys: { pod: "d" },
      dt_txt: "2019-06-21 03:00:00"
    },
    {
      dt: 1561096800,
      main: {
        temp: 30.57,
        temp_min: 30.57,
        temp_max: 30.57,
        pressure: 1003.05,
        sea_level: 1003.05,
        grnd_level: 997.31,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 6.24, deg: 198.667 },
      rain: { "3h": 0.25 },
      sys: { pod: "d" },
      dt_txt: "2019-06-21 06:00:00"
    }
  ],
  city: {
    id: 1819729,
    name: "Hong Kong",
    coord: { lat: 22.2855, lon: 114.1577 },
    country: "HK",
    timezone: 28800
  }
});

import axios, { AxiosRequestConfig } from "axios";

const request = axios.interceptors.request;

export const addWeatherAppIdInterceptor = request.use((config: AxiosRequestConfig) => {
  const { appid } = config.params;

  if(!appid || appid !== '{WEATHER_APPID}') {
    return config;
  }

  return {
    ...config,
    params: {
      ...config.params,
      appid: process.env.WEATHER_APPID,
    }
  };
});

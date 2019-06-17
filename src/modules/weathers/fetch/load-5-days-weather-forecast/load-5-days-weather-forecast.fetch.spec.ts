import Axios from "axios";
import { cleanup } from "@testing-library/react";
import { load5DaysWeatherForecastFetch } from "./load-5-days-weather-forecast.fetch";

jest.mock("axios");

describe('fetch: load5DaysWeatherForecastFetch', () => {

  afterEach(cleanup)

  describe('call with a query', () => {
    test('should call the api and return the transformed response', async () => {
      const axiosRequest = (Axios.request as jest.Mock<any>);

      axiosRequest.mockResolvedValueOnce({
        data: 'the response'
      });

      const response = await load5DaysWeatherForecastFetch(111);

      expect(
        axiosRequest.mock.calls
      ).toMatchSnapshot();

      expect(
        response
      ).toMatchSnapshot()
    });
  });
});

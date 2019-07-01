import { searchWeatherFetch } from "./search-weather.fetch";
import Axios from "axios";
import { cleanup } from "@testing-library/react";

jest.mock("axios");

describe('fetch: searchWeatherFetch', () => {

  afterEach(cleanup)

  describe('call with a query', () => {
    test('should call the api and return the response list', async () => {
      const axiosRequest = (Axios.request as jest.Mock<any>);

      axiosRequest.mockResolvedValueOnce({
        data: {
          list: 'the response'
        }
      });

      const response = await searchWeatherFetch('paris');

      expect(
        axiosRequest.mock.calls
      ).toMatchSnapshot();

      expect(
        response
      ).toMatchSnapshot()
    });
  });
});

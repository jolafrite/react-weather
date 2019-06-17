import Axios from "axios";
import { cleanup } from "@testing-library/react";
import { loadWeatherFetch } from "./load-weather.fetch";

jest.mock("axios");

describe('fetch: loadWeatherFetch', () => {

  afterEach(cleanup)

  describe('call with a query', () => {
    test('should call the api and return the response', async () => {
      const axiosRequest = (Axios.request as jest.Mock<any>);

      axiosRequest.mockResolvedValueOnce({
        data: 'the response'
      });

      const response = await loadWeatherFetch(111);

      expect(
        axiosRequest.mock.calls
      ).toMatchSnapshot();

      expect(
        response
      ).toMatchSnapshot()
    });
  });
});

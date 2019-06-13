import { searchWeatherFetch } from "./search-weather.fetch";
import Axios from "axios";
import { searchWeatherListTransformer } from "../../modules/weathers/transformers";
import { cleanup } from "@testing-library/react";

jest.mock("axios");
jest.mock("../../modules/weathers/transformers");

describe('fetch: searchWeatherFetch', () => {

  afterEach(cleanup)

  describe('call with a query less that 3 characters', () => {
    test('should return an empty array', async () => {
      const result = await searchWeatherFetch('pa');

      expect(
        result
      ).toMatchSnapshot();
    });
  });

  describe('call with a query', () => {
    test('should call the api and return the transformed response', async () => {
      const axiosRequest = (Axios.request as jest.Mock<any>);

      axiosRequest.mockResolvedValueOnce({
        data: {
          list: 'the response'
        }
      });
      (searchWeatherListTransformer as jest.Mock<any>).mockReturnValue('the response transformed')

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

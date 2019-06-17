import { WeatherSearchPageActions, WeatherApiActions } from '../../actions';
import { Dispatch } from 'redux';
import { searchWeatherFetch } from '../../fetch';
import { searchWeatherFetchResponseTransformer } from '../../transformers';

export const searchPageSearchWeatherEffect = (query: string) => async (dispatch: Dispatch) => {
  dispatch(WeatherSearchPageActions.search(query));

  return await searchWeathersEffect(
    query,
    WeatherSearchPageActions.searchSuccess,
    WeatherSearchPageActions.searchError,
    dispatch
  );
}

const searchWeathersEffect = async (query: string, onSuccess: any, onError: any, dispatch: Dispatch) => {
  try {
    const response = await searchWeatherFetch(query);
    const transformedResponse = searchWeatherFetchResponseTransformer(response);

    dispatch(WeatherApiActions.loadListSuccess(transformedResponse));
    dispatch(onSuccess(transformedResponse));
  } catch(e) {
    dispatch(onError(e));
  }
};

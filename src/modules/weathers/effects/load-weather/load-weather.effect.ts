import { Dispatch } from 'redux';
import { WeatherViewPageActions, WeatherApiActions } from '../../actions';
import { loadWeatherFetch } from '../../fetch';
import { loadWeatherFetchResponseTransformer } from '../../transformers';

export const viewPageLoadWeatherEffect = (id: number) => async (dispatch: Dispatch) => {
  dispatch(WeatherViewPageActions.loadOne());

  return await loadWeatherEffect(
    id,
    WeatherViewPageActions.loadOneSuccess,
    WeatherViewPageActions.loadOneError,
    dispatch
  );
}

export const loadWeatherEffect = async (id: number, onSuccess: any, onError: any, dispatch: Dispatch) => {
  try {
    const response = await loadWeatherFetch(id);
    const transformedResponse = loadWeatherFetchResponseTransformer(response);

    dispatch(WeatherApiActions.loadOneSuccess(transformedResponse));
    dispatch(onSuccess(transformedResponse));
  } catch(e) {
    dispatch(onError(e));
  }
};

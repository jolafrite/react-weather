import { Dispatch } from 'redux';
import { WeatherViewPageActions, WeatherApiActions } from '../../actions';
import { loadWeatherFetch } from '../../../../fetch';

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

    dispatch(WeatherApiActions.loadOneSuccess(response));
    dispatch(onSuccess(response));
  } catch(e) {
    dispatch(onError(e));
  }
};

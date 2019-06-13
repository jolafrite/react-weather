import { WeatherSearchPageActions, WeatherApiActions } from '../../actions';
import { Dispatch } from 'redux';
import { searchWeatherFetch } from '../../../../fetch';

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

    dispatch(WeatherApiActions.loadListSuccess(response));
    dispatch(onSuccess(response));
  } catch(e) {
    dispatch(onError(e));
  }
};

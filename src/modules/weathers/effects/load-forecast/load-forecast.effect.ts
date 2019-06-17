import { Dispatch } from 'redux';
import { WeatherViewPageActions, ForecastApiActions } from '../../actions';
import { load5DaysWeatherForecastFetch } from '../../fetch';
import { load5DaysWeatherForecastTransformer } from '../../transformers';

export const viewPageLoadForecastEffect = (id: number) => async (dispatch: Dispatch) => {
  dispatch(WeatherViewPageActions.loadOne());

  return await loadForecastEffect(
    id,
    WeatherViewPageActions.loadOneSuccess,
    WeatherViewPageActions.loadOneError,
    dispatch
  );
}

export const loadForecastEffect = async (id: number, onSuccess: any, onError: any, dispatch: Dispatch) => {
  try {
    const response = await load5DaysWeatherForecastFetch(id);
    const transformedResponse = load5DaysWeatherForecastTransformer(response);

    dispatch(ForecastApiActions.loadOneSuccess(transformedResponse));
    dispatch(onSuccess(transformedResponse));
  } catch(e) {
    dispatch(onError(e));
  }
};

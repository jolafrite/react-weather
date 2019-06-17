import {
  getViewPageState,
  getViewPageLoaded,
  getViewPageLoading,
  getViewPageError,
  getViewPageWeather,
  getViewPageId,
  getViewPageForecast,
  getViewPageTodayHourlyForecast,
  getViewPageNextDaysHourlyForecast,
  getViewPageNextDaysForecast
} from "./weather-view-page.selectors";

describe("selectors: weather view page", () => {
  describe("getViewPageState", () => {
    test("should return the weather viewPage state", () => {
      const state = {
        weathers: {
          viewPage: {
            state: "weathers viewPage"
          }
        }
      };

      expect(getViewPageState(state as any)).toMatchSnapshot();
    });
  });

  describe("getViewPageLoaded", () => {
    test("should return if the status is loaded", () => {
      const state = {
        weathers: {
          viewPage: {
            status: "loaded"
          }
        }
      };

      expect(getViewPageLoaded(state as any)).toMatchSnapshot();
    });
  });

  describe("getViewPageLoading", () => {
    test("should return if the status is loading", () => {
      const state = {
        weathers: {
          viewPage: {
            status: "loading"
          }
        }
      };

      expect(getViewPageLoading(state as any)).toMatchSnapshot();
    });
  });

  describe("getViewPageError", () => {
    test("should return if the status is error", () => {
      const state = {
        weathers: {
          viewPage: {
            status: "error"
          }
        }
      };

      expect(getViewPageError(state as any)).toMatchSnapshot();
    });
  });

  describe("getViewPageId", () => {
    test("should return the id", () => {
      const state = {
        weathers: {
          viewPage: {
            id: 1234
          }
        }
      };

      expect(getViewPageId(state as any)).toMatchSnapshot();
    });
  });

  describe("getViewPageWeather", () => {
    test("should return the matching weather", () => {
      const state = {
        weathers: {
          weathers: {
            entries: {
              1234: "weather from state"
            }
          },
          viewPage: {
            id: 1234
          }
        }
      };

      expect(getViewPageWeather(state as any)).toMatchSnapshot();
    });
  });

  describe("getViewPageForecast", () => {
    test("should return the matching forecast", () => {
      const state = {
        weathers: {
          forecasts: {
            entries: {
              1234: "forecast from state"
            }
          },
          viewPage: {
            id: 1234
          }
        }
      };

      expect(getViewPageForecast(state as any)).toMatchSnapshot();
    });
  });

  describe("getViewPageTodayHourlyForecast", () => {
    test("should return the weather today`s hourly forecast", () => {
      const state = {
        weathers: {
          weathers: {
            entries: {
              1234: { date: "2019-10-30" }
            }
          },
          forecasts: {
            entries: {
              1234: {
                "2019-10-30": "today forecast from state"
              }
            }
          },
          viewPage: {
            id: 1234
          }
        }
      };

      expect(getViewPageTodayHourlyForecast(state as any)).toMatchSnapshot();
    });
  });

  describe("getViewPageNextDaysHourlyForecast", () => {
    test("should return the weather next days hourly forecast", () => {
      const state = {
        weathers: {
          weathers: {
            entries: {
              1234: { date: "2019-10-10" }
            }
          },
          forecasts: {
            entries: {
              1234: {
                "2019-10-09": "yesterday forecast from state",
                "2019-10-10": "today forecast from state",
                "2019-10-11": "tomorrow forecast from state",
                "2019-10-12": "after tomorrow forecast from state"
              }
            }
          },
          viewPage: {
            id: 1234
          }
        }
      };

      expect(getViewPageNextDaysHourlyForecast(state as any)).toMatchSnapshot();
    });
  });

  describe("getViewPageNextDaysForecast", () => {
    test("should return the predicted next days forecast", () => {
      const state = {
        weathers: {
          weathers: {
            entries: {
              1234: { date: "2019-10-10" }
            }
          },
          forecasts: {
            entries: {
              1234: {
                "2019-10-10": "today forecast from state",
                "2019-10-11": {
                  "09:00:00": {
                    main: { temp: 21, temp_max: 25, temp_min: 19 },
                    weather: {
                      id: 803,
                      main: "Clouds",
                      description: "broken clouds",
                      icon: "04n"
                    }
                  },
                  "10:00:00": {
                    main: { temp: 17, temp_max: 19, temp_min: 15 },
                    weather: {
                      id: 701,
                      main: "Mist",
                      description: "mist",
                      icon: "50d"
                    }
                  },
                  "11:00:00": {
                    main: { temp: 23, temp_max: 24, temp_min: 22 },
                    weather: {
                      id: 300,
                      main: "Drizzle",
                      description: "light intensity drizzle",
                      icon: "09d"
                    }
                  }
                },
                "2019-10-12": {
                  "09:00:00": {
                    main: { temp: -10, temp_max: -5, temp_min: -12 },
                    weather: {
                      id: 802,
                      main: "Clouds",
                      description: "scattered clouds",
                      icon: "03d"
                    }
                  },
                  "10:00:00": {
                    main: { temp: 5, temp_max: 7, temp_min: 2 },
                    weather: {
                      id: 800,
                      main: "Clear",
                      description: "clear sky",
                      icon: "01d"
                    }
                  },
                  "11:00:00": {
                    main: { temp: -3, temp_max: 0, temp_min: -5 },
                    weather: {
                      id: 804,
                      main: "Clouds",
                      description: "overcast clouds",
                      icon: "04d"
                    }
                  }
                }
              }
            }
          },
          viewPage: {
            id: 1234
          }
        }
      };

      expect(getViewPageNextDaysForecast(state as any)).toMatchSnapshot();
    });
  });
});

import { useFixtureFactory } from "../../../../common/utils/test";

export const weatherFixture = useFixtureFactory<any>({
  id: 1851632,
  name: "Shuzenji",
  country: "JP",
  main: {
    temp: 298.77,
    temp_min: 298.77,
    temp_max: 298.774,
    pressure: 1005.93,
    sea_level: 1018.18,
    grnd_level: 1005.93,
    humidity: 87,
    temp_kf: 0.26
  },
  weather: [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
  ],
  clouds: { all: 88 },
  wind: { speed: 5.71, deg: 229.501 },
  dt: 1406106000,
  dt_txt: "2014-07-23 09:00:00"
});

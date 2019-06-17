import { getDateWeekDay } from "./get-date-week-day";

describe('utils: getDateWeekDay', () => {

  describe('Object Date', () => {
    describe('2019-06-18', () => {
      test('should return tuesday', () => {
        expect(
          getDateWeekDay(new Date('2019-06-18'))
        ).toMatchSnapshot();
      });
    });

    describe('2019-06-16', () => {
      test('should return sunday', () => {
        expect(
          getDateWeekDay(new Date('2019-06-16'))
        ).toMatchSnapshot();
      });
    });
  });

  describe('String Date', () => {
    describe('2019-06-21', () => {
      test('should return friday', () => {
        expect(
          getDateWeekDay('2019-06-21')
        ).toMatchSnapshot();
      });
    });
  });

});

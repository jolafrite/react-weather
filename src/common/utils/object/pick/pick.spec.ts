import { pick } from "./pick";

describe('pick', () => {

  test('should return an new array with the picked keys', () => {
    const object = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    }
    expect(
      pick(object, ['key2', 'key3'])
    ).toMatchSnapshot();

  });

});

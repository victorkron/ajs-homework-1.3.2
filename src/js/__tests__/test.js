import sort from '../app';

const arr = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const orderArr = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

describe('For order', () => {
  test.each([
    ['haven`t order', arr, orderArr],
  ])(
    ('-> %s'),
    (str, testArr, resArr) => {
      const resFun = sort(testArr);
      expect(resFun).toEqual(resArr);
    },
  );
});

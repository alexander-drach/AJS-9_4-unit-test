import sortPerson from '../matchers';

test('sort test toBe', () => {
  const arr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortPerson(arr);

  expect(result).toBe(sortArr);
});

test('sort test toEqual', () => {
  const arr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortPerson(arr);

  expect(result).toEqual(sortArr);
});

test('sort test toEqual one element', () => {
  const arr = [
    { name: 'мечник', health: 10 },
  ];

  const sortArr = [
    { name: 'мечник', health: 10 },
  ];

  const result = sortPerson(arr);

  expect(result).toEqual(sortArr);
});

test('sort test toEqual sort', () => {
  const arr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const sortArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortPerson(arr);

  expect(result).toEqual(sortArr);
});

test('sort test toEqual reverse', () => {
  const arr = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];

  const sortArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortPerson(arr);

  expect(result).toEqual(sortArr);
});

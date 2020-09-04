import getInfoHealth from '../health';

test('health test', () => {
  const result = getInfoHealth({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('health test', () => {
  const result = getInfoHealth({ name: 'Маг', health: 35 });

  expect(result).toBe('wounded');
});

test('health test', () => {
  const result = getInfoHealth({ name: 'Маг', health: 2 });

  expect(result).toBe('critical');
});

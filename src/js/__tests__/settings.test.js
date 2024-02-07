import Settings from '../Settings';

test('test getter setting', () => {
  const settings = new Settings();
  settings.setUserSetting('theme', 'light');
  const expected = new Map([
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(settings.setting).toEqual(expected);
});

test('test setUserSetting method error', () => {
  const settings = new Settings();
  const expected = new Error('Неверные данные');
  expect(() => { settings.setUserSetting('theme', 'trance'); }).toThrow(expected);
});

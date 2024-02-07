export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.available = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);
    this.user = new Map();
  }

  setUserSetting(name, value) {
    if (!([...this.available.keys()].includes(name))
    || !(this.available.get(name).includes(value))) {
      throw new Error('Неверные данные');
    }
    this.user.set(name, value);
  }

  get setting() {
    const userSetting = new Map();
    this.default.forEach((value, key) => {
      if (this.user.has(key)) {
        userSetting.set(key, this.user.get(key));
      } else {
        userSetting.set(key, this.default.get(key));
      }
    });
    return userSetting;
  }
}

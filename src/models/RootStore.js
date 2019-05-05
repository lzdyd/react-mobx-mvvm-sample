import LoginModel from './domain/LoginModel';

export default class RootStore {
  static type = {
    LOGIN_MODEL: 'loginModel',
  };

  constructor() {
    this.loginModel = new LoginModel();
  }

  getStores = () => ({
    [RootStore.type.LOGIN_MODEL]: this.loginModel,
  });
}

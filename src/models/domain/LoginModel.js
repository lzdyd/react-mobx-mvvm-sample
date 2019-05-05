import { decorate, observable, action, set } from 'mobx';

class LoginModel {
  static defaultLogin = 'default login';

  constructor() {
    this.login = LoginModel.defaultLogin;
  }

  setLogin(newLogin) {
    this.login = newLogin;
    // this.loginState.login = newLogin;
  }

  resetLogin() {
    this.loginState.label = LoginModel.defaultLogin;
  }

  getLogin() {
    return this.login;
  }
}

export default decorate(LoginModel, {
  login: observable,
  setLogin: action,
  resetLogin: action,
});

export default class LoginFormViewModel {
  constructor(loginStore) {
    this.store = loginStore;
  }

  getLogin() {
    return this.store.getLogin();
  }

  setLogin(login) {
    this.store.setLogin(login);
  }

  resetLogin() {
    this.store.resetLogin();
  }
}

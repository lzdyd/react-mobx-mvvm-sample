import React, { Component } from 'react';
import { inject } from 'mobx-react';
import LoginFormController from './LoginFormController';
import LoginFormViewModel from './LoginFormViewModel';
import RootStore from '../../models/RootStore';

class LoginFormProvider extends Component {
  constructor(props) {
    super(props);
    const loginModel = props[RootStore.type.LOGIN_MODEL];
    this.viewModel = new LoginFormViewModel(loginModel);
  }

  render() {
    return <LoginFormController viewModel={this.viewModel} />;
  }
}

export default inject(RootStore.type.LOGIN_MODEL)(LoginFormProvider);

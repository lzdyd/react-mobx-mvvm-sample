import React, { Component } from 'react';
import LoginFormView from './LoginFormView';

export default class LoginFormController extends Component {
  setLogin = login => {
    const { viewModel } = this.props;
    viewModel.setLogin(login);
    // this.clearLogin();
  };

  clearLogin = () => {
    this.setState({
      login: '',
    });
  };

  render() {
    const { viewModel } = this.props;

    return (
      <LoginFormView
        currentLogin={viewModel.getLogin()}
        setLogin={this.setLogin}
      />
    );
  }
}

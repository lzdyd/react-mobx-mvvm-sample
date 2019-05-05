import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import Form from './UI/Form';

const LoginFormView = ({ currentLogin, setLogin }) => {
  return (
    <Container>
      <h1>Current login: {currentLogin}</h1>
      <Form setLogin={setLogin} />
    </Container>
  );
};

LoginFormView.propTypes = {};
LoginFormView.defaultProps = {};

export default LoginFormView;

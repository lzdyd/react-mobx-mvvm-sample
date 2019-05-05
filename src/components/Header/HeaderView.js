import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const HeaderView = props => {
  return (
    <header>
      <Container>
        <Menu>
          <Menu.Item header>
            <Link to="/">React-MVVM-Mobx Sample</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/path-1">Path-1</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/path-2">Path-2</Link>
          </Menu.Item>

          <Menu.Menu position="right">current login</Menu.Menu>
        </Menu>
      </Container>
    </header>
  );
};

HeaderView.propTypes = {};
HeaderView.defaultProps = {};

export default HeaderView;

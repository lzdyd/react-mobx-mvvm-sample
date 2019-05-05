import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderView from './components/Header/HeaderView';
import LoginFormProvider from './components/LoginForm/LoginFormProvider';

function App() {
  return (
    <Fragment>
      <HeaderView />
      <Switch>
        <Route exact path="/" component={LoginFormProvider} />
        <Route path="/path-1" component={() => <div>path-1</div>} />
        <Route path="/path-2" component={() => <div>path-2</div>} />
        <Route component={() => <div>404</div>} />
      </Switch>
    </Fragment>
  );
}

export default App;

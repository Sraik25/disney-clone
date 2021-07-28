import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Detail from '../components/Detail';
import Login from '../components/Login';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;

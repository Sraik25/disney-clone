import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Detail from '../components/Detail';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  );
};

export default Routes;

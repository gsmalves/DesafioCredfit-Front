import { Switch } from 'react-router-dom';

import Loan from '../pages/Loan/index';

import { RouteAuth } from './RouteAuth';

export function AppRoutes() {
  return <Switch>
    <RouteAuth path="/" component={Loan} />
</Switch>
}


// src/routes/AppRoutes.tsx
import { Route, Switch } from 'react-router-dom';
import Card2Page from '../pages/Card2'; // Importando a nova página
import Card3Page from '../pages/Card3';
import Card4Page from '../pages/Card4';
import LoanPage from '../pages/Loan'; // Renomeie a Loan para LoanPage

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={LoanPage} />
      <Route path="/card2" component={Card2Page} />
      <Route path="/card3" component={Card3Page}/>
      <Route path="/card4" component={Card4Page}/>
    </Switch>
  );
}

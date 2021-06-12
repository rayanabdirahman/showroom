import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';

function App(): JSX.Element {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Switch>
        <Route exact path="/product" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;

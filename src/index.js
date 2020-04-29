import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './Pages/Home';
import Sobre from './Pages/Sobre';
import Livros from './Pages/Livros';
import Autores from './Pages/Autores';
import NotFound from './Pages/NotFound';

import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App}/>
      <Route path='/sobre' component={Sobre}/>
      <Route path='/livros' component={Livros}/>
      <Route path='/autores' component={Autores}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

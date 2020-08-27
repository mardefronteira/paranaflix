import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Categoria from './pages/Categoria';
import Sobre from './pages/Sobre';
import Apoie from './pages/Apoie';
import CadastroFilme from './pages/cadastro/Filme';
import CadastroGForm from './pages/cadastro/GForm';
import CadastroCategoria from './pages/cadastro/Categoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ReactGA from 'react-ga';



ReactGA.initialize('UA-176125617-1');
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/sobre" component={Sobre}></Route>
      <Route path="/apoie" component={Apoie}></Route>
      <Route path="/filme/:id" component={Filme}></Route>
      <Route path="/categoria/:id" component={Categoria}></Route>
      <Route path="/novo_filme" component={CadastroGForm}/>
      <Route path="/postar_filme" component={CadastroFilme}/>
      <Route path="/nova_categoria" component={CadastroCategoria}/>
      <Route path="/" component={Home} exact />
      <Route component={NotFound} /> {/*404*/}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

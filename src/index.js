import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Teste from './pages/Teste';
import Filme from './pages/Filme';
import Categoria from './pages/Categoria';
import Sobre from './pages/Sobre';
import CadastroFilme from './pages/cadastro/Filme';
import CadastroCategoria from './pages/cadastro/Categoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/sobre" component={Sobre}></Route>
      <Route path="/filme/:id" component={Filme}></Route>
      <Route path="/categoria/:id" component={Categoria}></Route>
      <Route path="/novo_filme" component={CadastroFilme}/>
      <Route path="/nova_categoria" component={CadastroCategoria}/>
      <Route path="/teste" component={Teste} />
      <Route path="/" component={Home} exact />
      <Route component={NotFound} /> {/*404*/}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

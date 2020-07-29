import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/novo_video" component={CadastroVideo}/>
      <Route path="/nova_categoria" component={CadastroCategoria}/>
      <Route path="/" component={Home} exact />
      <Route component={NotFound} /> {/*404*/}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

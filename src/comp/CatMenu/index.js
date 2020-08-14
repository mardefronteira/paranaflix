//importar react
import React, { useState, useEffect } from 'react';
import { Label, CatLabelWrapper } from './Label'

import catRepo from '../../repositories/categorias';

function CatMenu () {
  //array contendo todos os filmes
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    catRepo.getAll()
    .then((categoriasDB) => {
      setCategorias(categoriasDB);
    });
  },[]);

  return (
    <CatLabelWrapper>
      <h1>Categorias:</h1>
    {categorias.map((categoria, i) => {
      if (i > 5){
      return (
        <Label
          to={`/categorias/${categoria.id}`}
          style={{ color: categoria.cor || 'red' }}
        >
          {categoria.titulo}
        </Label>
      )}
    })}
  </CatLabelWrapper>
  )
}

export default CatMenu;

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
            key = {`catmenu_${categoria.id}_${i}`}
            to={`/categoria/${categoria.id}`}
            style={{ color: categoria.cor || 'red' }}
          >
            {categoria.titulo}
          </Label>
        )
      } else {
        return null;
      }
    })}
  </CatLabelWrapper>
  )
}

export default CatMenu;

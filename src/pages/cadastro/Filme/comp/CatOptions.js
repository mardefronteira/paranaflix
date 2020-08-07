import React, { useEffect, useState } from 'react';
import catRepo from '../../../../repositories/categorias';

function CatOptions (children) {
  //array contendo todos os filmes
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    catRepo.getAll()
    .then((categoriasDB) => {
      setCategorias(categoriasDB);
    });
  },[]);

  return (
    <>
    {categorias.map((categoria) => {
      return (
        <option key={categoria.titulo} value={categoria.id}>{categoria.titulo}</option>
      );
    })}
    </>
  )
}

export default CatOptions;

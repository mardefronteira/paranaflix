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
    {categorias.map((categoria,index) => {
      if(index>5){
        return (
          <option key={categoria.titulo} value={categoria.titulo}>{categoria.titulo}</option>
        )
      } else {
        return null;
      }
    })}
    </>
  )
}

export default CatOptions;

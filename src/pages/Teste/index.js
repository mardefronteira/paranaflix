import React from 'react';

import catRepo from '../../repositories/categorias';

function Teste() {

  catRepo.addFilmToCat("teste", [1,2,3]);

  return (
    <div></div>
  );
}

export default Teste;

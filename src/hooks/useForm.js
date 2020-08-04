import { useState } from 'react';

function useForm(valoresIniciais) {

  /*state que manuseia o objInfoCategoria*/
  const [infos, setInfos] = useState(valoresIniciais);

  /*função para atribuir o input ao objeto*/
  function setInfo(chave, valor) {
    setInfos({
        ...infos,
        [chave]: valor, //'chave' está atribuída como valor dinâmico. ela nomeia outra variável.
    });
  }

  //função genérica para atribuir o valor do input a cada campo
  function handleChange(e){
    // const { getAttribute, value } = e.target;
    setInfo(
      e.target.getAttribute('name'),
      e.target.value
    );
  }

  function clearForm () {
      setInfos(valoresIniciais);
  }

  return {
    infos,
    handleChange,
    clearForm,
  };
}

export default useForm;

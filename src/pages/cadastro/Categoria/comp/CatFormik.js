import { withFormik } from 'formik';
import * as Yup from 'yup';
import CatForm from './CatForm';
import catRepo from '../../../../repositories/categorias';
import { useHistory } from 'react-router-dom';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function BackToFilm() {
  const history = useHistory();
  history.push("/novo_filme");
}

const CatFormik =
  withFormik ({
  mapPropsToValues({
    cor,
    desc,
    titulo,
  }) {
    return {
      cor: getRandomColor(),
      desc: '',
      titulo: '',
    }
  },
  validationSchema: Yup.object().shape({
    cor: Yup.string(),
    desc: Yup.string().required('Este campo é obrigatório.'),
    titulo: Yup.string().required('Este campo é obrigatório.'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {


    if (false /*categoria já está na db*/){
      setErrors({ titulo: 'Esta categoria já está em nossa base de dados.'})
    } else {
      const thisCat = {
        cor: values.cor,
        desc: values.desc,
        titulo: values.titulo,
        filmes: []
      }
      catRepo.newCat(thisCat);
      console.log(thisCat);
      resetForm();
      alert("Categoria cadastrada!");
      return (BackToFilm())
    }
    setSubmitting(false);
  }//close handleSubmit
})(CatForm);



export default CatFormik;

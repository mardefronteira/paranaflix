import { withFormik } from "formik";
import * as Yup from "yup";
import FilmForm from "./FilmForm";
import getUrlInfo from "../../../../hooks/getUrlInfo";
import filmRepo from "../../../../repositories/filmes";
import catRepo from "../../../../repositories/categorias";

const FilmFormik = withFormik({
  mapPropsToValues({
    ano,
    categorias,
    cidade,
    direcao,
    duracao,
    exibicoes,
    outras,
    producao,
    equipe,
    respEmail,
    respNome,
    sinopse,
    titulo,
    url,
  }) {
    return {
      ano: "",
      categorias: [],
      cidade: "",
      direcao: "",
      duracao: "",
      exibicoes: "",
      outras: "",
      producao: "",
      equipe: "",
      respEmail: "paranaflix@pm.me",
      respNome: "Paranáflix",
      sinopse: "",
      titulo: "",
      url: "",
    };
  },

  validationSchema: Yup.object().shape({
    ano: Yup.number("Nos últimos séculos, anos são números de 4 dígitos!")
      .moreThan(
        1900,
        "Este campo só aceita anos entre hoje e a invenção do cinema."
      )
      .lessThan(
        2100,
        "Este campo só aceita anos entre 2100 e a invenção do cinema."
      )
      .required("Este campo é obrigatório."),
    categorias: Yup.array()
      .of(Yup.string())
      .required("Escolha ao menos uma categoria."),
    cidade: Yup.string().required("Este campo é obrigatório."),
    direcao: Yup.string().required("Este campo é obrigatório."),
    duracao: Yup.string().required("Este campo é obrigatório."),
    exibicoes: Yup.string(),
    outras: Yup.string().max(800, "Máximo de 800 caracteres."),
    producao: Yup.string(),
    equipe: Yup.string().max(800, "Máximo de 800 caracteres."),
    respEmail: Yup.string()
      .email(
        "Tem algo errado com este email! Por favor, adicione um email válido."
      )
      .required("Este campo é obrigatório."),
    respNome: Yup.string().required("Este campo é obrigatório."),
    sinopse: Yup.string().required("Este campo é obrigatório."),
    titulo: Yup.string().required("Este campo é obrigatório."),
    url: Yup.string()
      .url(
        "Tem algo errado com a URL! Este campo aceita somente links do Vimeo ou YouTube."
      )
      .required("Este campo é obrigatório."),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    const urlInfo = getUrlInfo(values.url);

    // checar se a URL gerou uma id consistente
    if (urlInfo.filmId === "error" || urlInfo.filmHost === "error") {
      setErrors({
        url:
          "Tem algo errado com a URL! Este campo aceita somente links do Vimeo ou YouTube.",
      });
    } else if (false) {
      // checar se filme já está na database
      setErrors({ url: "Este filme já está em nossa base de dados." });
    } else {
      // se não houver erros
      // consultar os títulos das categorias e retornar a id de cada uma
      const thisCats = [];

      catRepo
        .getAll()
        .then((categoriasDB) => {
          categoriasDB.map((categoriaDB) => {
            values.categorias.map((catTitulo) => {
              if (catTitulo === categoriaDB.titulo) {
                thisCats.push(categoriaDB.id);
              }
              return null;
            });
            return null;
          });
        })
        .then(() => {
          // adicionar o filme às categorias
          catRepo.addFilmToCat(urlInfo.filmId, thisCats);
        });

      // calcular a década e pegar a id de categoria correspondente
      let catId = 0;
      if (values.ano > 1979) {
        for (let i = 0; i < 5; i++) {
          if (values.ano > 1979 + i * 10) {
            catId = i + 2;
          }
        }
      } else {
        catId = 1;
      }

      // criar objeto com todos os dados do novo filme
      const thisFilm = {
        ano: values.ano,
        categoriaId: catId,
        categorias: values.categorias, // >>> adicionar os valores em ID em vez de título?
        cidade: values.cidade,
        direcao: values.direcao,
        duracao: values.duracao,
        exibicoes: values.exibicoes,
        outras: values.outras,
        producao: values.producao,
        equipe: values.equipe,
        resp: {
          email: values.respEmail,
          nome: values.respNome,
        },
        sinopse: values.sinopse,
        titulo: values.titulo,
        urlId: urlInfo.filmId,
        urlHost: urlInfo.filmHost,
        mostrar: true,
        destaque: false,
      };

      // adicionar filme à database
      filmRepo.newFilm(thisFilm);

      // resetar formulário
      resetForm();
    }

    setSubmitting(false);
  },
})(FilmForm);

export default FilmFormik;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Base from '../../comp/Base';
import filmRepo from '../../repositories/filmes';
import catRepo from '../../repositories/categorias';
import {Helmet} from 'react-helmet';

import VideoCard from '../../comp/Carousel/components/VideoCard';

import { GridWrapper, GridPosition, ContentWrapper, Title } from './style.js';



function Categoria() {
let { id } = useParams();
const catId = id;

const [filmInfoList, setFilmInfoList] = useState([]);
const [filmIdList, setFilmIdList] = useState([]);
const [catInfo, setCatInfo] = useState([]);

function GetCatInfo() {
    useEffect(() => {
      if(catId > 6) {
        catRepo.getCat(catId)
        .then((dbCatInfo) => {
            setCatInfo(dbCatInfo)
            setFilmIdList(dbCatInfo.filmes)
          }).catch((err) => {
            console.log("Não foi possível acessar a database. Será que não sobrou uma vírgula no fim do arquivo da DB?", err);
          });
      } else {
        catRepo.getCatWithFilms(catId)
        .then((dbCatInfo) => {
            setCatInfo(dbCatInfo)
            setFilmInfoList(dbCatInfo.filmes)
        }).catch((err) => {
          console.log("Não foi possível acessar a database. Será que não sobrou uma vírgula no fim do arquivo da DB?", err);
        });
      }
    }, []);
    return;
  }

  GetCatInfo(catId);

  useEffect(() => {

        filmIdList.map((filmId)=>{
        filmRepo.getOne(filmId)

      .then((dbFilmInfo) => {

        setFilmInfoList(filmInfoList => filmInfoList.concat(dbFilmInfo));

      }).catch((err) => {

        console.log("Não foi possível acessar a database. Será que não sobrou uma vírgula no fim do arquivo da DB?", err);

      })
      return null;
    })

  }, [filmIdList])

  return (
    <>
      <Helmet>
        <title>Paranáflix{catInfo.titulo != undefined ? ` - ${catInfo.titulo}` : ""}</title>
      </Helmet>
      <Base>
        <ContentWrapper>
        <Title>
          <h1>{catInfo.titulo}</h1>
          { catInfo.desc && <p>{catInfo.desc}</p>}
        </Title>

        <GridWrapper>

            { filmInfoList.length > 0 ? filmInfoList.map((filme, i) => {
                return (
                  <GridPosition key={`${filme.urlId}_${i}`} column = {i%4} row={i/4}>
                    <VideoCard
                      titulo={filme.titulo || ""}
                      sinopse={filme.sinopse || ""}
                      ano={filme.ano || ""}
                      id={filme.urlId || ""}
                      host={filme.urlHost || ""}
                      duracao={filme.duracao || ""}
                      categoryColor={catInfo.cor || ""}
                    />
                </GridPosition>
                )
              }): <p>carregando...</p>
            }

        </GridWrapper>

      </ContentWrapper>
    </Base>
    </>
    );

}

export default Categoria;

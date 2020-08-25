import React from 'react';
import Base from '../../comp/Base';
import { SobreWrapper, Subtitulo } from './style.js';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


function Sobre() {


  return (
    <>
      <Helmet>
        <title>Paranáflix - Sobre</title>
      </Helmet>
      <Base>
        <SobreWrapper>
            <Subtitulo cor="var(--rosa)">O QUE É?</Subtitulo>
            <div>
              <p>O Paranáflix é uma plataforma colaborativa criada para difundir produções cinematográficas produzidas em todo o estado do Paraná.</p>
              <p>Buscamos construir uma forma livre, popular e coletiva para dar visibilidade às produções do estado, e oferecer o acesso gratuito de filmes para quem busca informações culturais.</p>
              <p>Este gesto surge como sintoma da insuficiência de políticas públicas consistentes, ativas, e longevas de distribuição, produção, exibição e preservação do cinema no Paraná, e de modo algum pretende trazer soluções paliativas a estes problemas de imenso interesse público.</p>
              <p>Vamos fortalecer o cinema brasileiro!</p>
            </div>
            <div>
              <Subtitulo cor="var(--rosa)">COMO FUNCIONA?</Subtitulo>
              <p>Para colaborar com o acervo basta clicar no botão <Link to="/novo_filme">“Adicione um filme”</Link> e preencher as informações necessárias, simples assim! Quem constrói este acervo é você!</p>
              <p>Este site não hospeda nenhum dos filmes aqui exibidos, é apenas uma interface acessível de produções já disponíveis de forma gratuita em plataformas de streaming (Youtube e Vimeo).</p>
              <p>O Paranáflix não tem finalidade lucrativa, mantemos o site através de doações, caso queira contribuir acesse <a href="http://www.apoia.se">nossa campanha no Apoia.se</a></p>
              <p>Quanto plataforma colaborativa não restringimos quais filmes entram no site, mas nos reservamos o direito de remover qualquer filme com teor racista, machista, homofóbico, transfóbico, xenofóbico ou de intolerância religiosa.</p>
              <p>Viu seu filme aqui sem sua autorização? Enviou um filme mas quer alterar alguma informação? Quer sugerir uma nova categoria? Tem alguma queixa, crítica ou elogio? Fale conosco em <a href = "mailto: paranaflix@pm.me">paranaflix@pm.me</a></p>
            </div>
            <div>
              <Subtitulo cor="var(--rosa)">QUEM SOMOS?</Subtitulo>
              <p>O Paranáflix surgiu inicialmente como uma lista colaborativa organizada pelo Tomás von der Osten (<a href="http://www.instagram.com/materiasolar">@materiasolar</a>), lista esta que surgiu como desdobramento da pesquisa e atividade cineclubista do <a href="http://www.instagram.com/cineclubeaurora">@cineclubeaurora</a>, onde é curador junto com a Cristiane Senn e o William Biagioli.</p>
              <p>Este site bonito que você está desfrutando foi desenvolvido pela Marcela Mancino (<a href="http://www.instagram.com/marcelamancino">@marcelamancino</a>), baseado no projeto realizado durante a Imersão React da Alura.</p>
            </div>
            <div>
              <Subtitulo cor="var(--rosa)">APOIE O PROJETO!</Subtitulo>
              <a href="http://www.instagram.com/paranaflix">Siga o Paranáflix no Instagram.</a>
              <br/><br/>
              <a href="http://www.apoia.se">Colabore com a manutenção do site através da nossa campanha contínua de financiamento coletivo.</a>
              <br/><br/>
              Ou faça uma doação pontual através do picpay @marcelamancino.
            </div>

      </SobreWrapper>
      </Base>
      </>
  );
}

export default Sobre;

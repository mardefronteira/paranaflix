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
              <p>A Paranáflix é uma plataforma colaborativa criada para difundir produções cinematográficas produzidas em todo o estado do Paraná.</p>
              <p>Buscamos construir uma forma livre, popular e coletiva para dar visibilidade às produções do estado, e oferecer o acesso gratuito de filmes para quem busca informações culturais.</p>
              <p>Este gesto surge como sintoma da insuficiência de políticas públicas consistentes, ativas, e longevas de distribuição, produção, exibição e preservação do cinema no Paraná, e de modo algum pretende trazer soluções paliativas a estes problemas de imenso interesse público.</p>
              <p>Vamos fortalecer o cinema brasileiro!</p>
            </div>
            <div>
              <Subtitulo cor="var(--rosa)">COMO FUNCIONA?</Subtitulo>
              <p>Para colaborar com o acervo basta clicar no botão <Link to="/novo_filme" target="_blank">“Adicione um filme”</Link> e preencher as informações necessárias, simples assim! Quem constrói o acervo é você!</p>
              <p>Este site não hospeda nenhum dos filmes aqui exibidos, é uma interface para facilitar o acesso a produções já disponíveis de forma gratuita em outras plataformas (Youtube e Vimeo).</p>
              <p>A Paranáflix não tem finalidade lucrativa, mantemos o site através de doações, caso queira contribuir acesse <a href="https://apoia.se/paranaflix" target="_blank">nossa campanha no Apoia.se</a>.</p>
              <p>O critério mínimo de inclusão no acervo é de ter, ao menos, uma exibição pública comprovada (exceto videoclipes e webséries). Ademais, nos reservamos o direito de remover qualquer filme com teor racista, machista, homofóbico, transfóbico, xenofóbico ou de intolerância religiosa. Filmes que não tiveram exibições públicas podem ser enviados mas passarão por curadoria.</p>
              <p>Viu seu filme aqui sem sua autorização? Enviou um filme mas quer alterar alguma informação? Quer sugerir uma nova categoria? Tem alguma queixa, crítica ou elogio? Fale conosco em <a href = "mailto: paranaflix@pm.me">paranaflix@pm.me</a>.</p>
            </div>
            <div>
              <Subtitulo cor="var(--rosa)">QUEM SOMOS?</Subtitulo>
              <p>A Paranáflix surgiu como uma lista colaborativa organizada por Tomás von der Osten (<a href="http://www.instagram.com/materiasolar" target="_blank">@materiasolar</a>), lista esta que surgiu como desdobramento da pesquisa e atividade do <a href="http://www.instagram.com/cineclubeaurora" target="_blank">@cineclubeaurora</a>, onde é curador junto com a Cristiane Senn e o William Biagioli.</p>
              <p>Este site bonito que você está desfrutando está sendo desenvolvido por Marcela Mancino (<a href="http://www.instagram.com/marcelamancino" target="_blank">@marcelamancino</a>), baseado no projeto realizado durante a Imersão React da Alura.</p>
            </div>
            <div>
              <Subtitulo cor="var(--rosa)">APOIE O PROJETO!</Subtitulo>
              <p>• Colabore com a manutenção do site através da nossa <a href="https://apoia.se/paranaflix" target="_blank">campanha contínua de financiamento coletivo</a>.</p>
              <p>• Se preferir, faça uma doação pontual através do picpay <a href="http://picpay.me/marcelamancino" target="_blank">@marcelamancino</a>.</p>
              <p>• <a href="http://www.instagram.com/paranaflix" target="_blank">Siga a Paranáflix no Instagram</a>.</p>
              <p>• Ajude a divulgar o projeto!</p>
            </div>

      </SobreWrapper>
      </Base>
      </>
  );
}

export default Sobre;

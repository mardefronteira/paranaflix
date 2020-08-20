import React from 'react';
import Base from '../../comp/Base';
import { SobreWrapper } from './style.js';
import {Helmet} from 'react-helmet';


function Sobre() {


  return (
    <>
      <Helmet>
        <title>Paranáflix - Sobre</title>
      </Helmet>
      <Base>
        <SobreWrapper>
            <h1>Sobre</h1>
            <div>
              <p>O Paranáflix é uma plataforma colaborativa criada para difundir produções cinematográficas produzidas em todo o estado do Paraná.</p>
              <p>Buscamos construir uma forma popular e coletiva de visibilidade para filmes produzidos no estado, para auxiliar na distribuição gratuita de filmes independentes e possibilitar o acesso à estes filmes para os mais diversos fins (entretenimento, uso em sala de aula, pesquisa, etc).</p>
              <p>A plataforma surge como sintoma da insuficiência de políticas públicas consistentes, ativas, e longevas de distribuição, exibição e preservação do cinema no Paraná.</p>
              <p>Ajude-nos a fortalecer o cinema brasileiro!</p>
            </div>
            <div>
              <h2>COMO FUNCIONA?</h2>
              <p>Para colaborar com o acervo basta clicar no botão “Adicione seu filme” e preencher as informações necessárias, simples assim! Quem cria o nosso acervo é você!</p>
              <p>Nosso site não hospeda nenhum dos filmes aqui exibidos, é apenas uma interface acessível de produções já disponíveis de forma gratuita em plataformas de streaming (Youtube e Vimeo).</p>
              <p>O Paranáflix não tem finalidade lucrativa, mantemos o site através de doações, caso queira contribuir acesse <a href="http://www.apoia.se">nossa campanha no Apoia.se</a></p>
              <p>Quanto plataforma colaborativa não restringimos quais filmes entram no site, mas nos reservamos o direito de remover qualquer filme com teor racista, machista, homofóbico, transfóbico, xenofóbico ou de intolerância religiosa.</p>
              <p>Viu seu filme aqui sem sua autorização? Enviou seu filme mas quer alterar algumas informação? Quer sugerir uma nova categoria? Tem alguma queixa, crítica ou elogio? Fale conosco em <a href = "mailto: paranaflix@pm.me">paranaflix@pm.me</a></p>
            </div>
            <div>
              <h2>QUEM SOMOS?</h2>
              <p>O Paranáflix surgiu inicialmente como uma lista colaborativa organizada pelo Tomás von der Osten (@materiasolar), lista esta que surgiu como desdobramento da pesquisa e atividade cineclubista do @cineclubeaurora, onde é curador junto com a Cristiane Senn e o William Biagioli.</p>
              <p>Este site bonito que você está desfrutando foi desenvolvido pela Marcela Mancino (@marcelamancino), baseado no projeto realizado durante a <a href="https://www.alura.com.br/" target="_blank" rel="external noopener noreferrer">Imersão React da Alura</a>.</p>
            </div>
            <div>
              <h2>APOIE O PROJETO</h2>
              <a href="http://www.instagram.com/paranaflix">Siga o Paranáflix no Instagram.</a>
              <br/><br/>
              <a href="http://www.apoia.se">Colabore com a manutenção do site através da nossa campanha de financiamento coletivo.</a>
            </div>

      </SobreWrapper>
      </Base>
      </>
  );
}

export default Sobre;

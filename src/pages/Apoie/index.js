import React from 'react';
import Base from '../../comp/Base';
import { SobreWrapper, Subtitulo, ApoiosWrapper } from './style.js';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


function Apoie() {


  return (
    <>
      <Helmet>
        <title>Paranáflix - Apoie</title>
      </Helmet>
      <Base>
        <SobreWrapper>
          <h1>Apoie a plataforma</h1>
            <div>
              <p>A Paranáflix é construída de maneira colaborativa e não tem finalidade lucrativa, mantemos o site de forma independente através de doações.</p>
              <br/>
              <Subtitulo cor="var(--rosa)">FINANCIAMENTO COLETIVO</Subtitulo>
              <p>
                Para cobrir os gastos fixos de manutenção do site, mantemos uma plataforma de financiamento coletivo contínua no <a href="https://apoia.se/paranaflix" target="_blank">Apoia.se</a>.
              </p>
              <p>
                Você pode contribuir mensalmente com qualquer quantia a partir de R$1, ajudando com os gastos de hospedagem, gerenciamento de dados, melhorias na plataforma, e ações educativas.
              </p>
              <p>
                <a href="https://apoia.se/paranaflix" target="_blank">Para mais detalhes, confira a descrição completa da campanha!</a>
              </p>
              <br/>
              <Subtitulo cor="var(--rosa)">CONTRIBUIÇÃO PONTUAL</Subtitulo>
              <p>
                Caso prefira, também é possível realizar uma contribuição pontual através do Picpay (<a href="https://picpay.me/marcelamancino" target="_blank">@marcelamancino</a>).
              </p>
              <br/>
              <Subtitulo cor="var(--rosa)">DIVULGUE O PROJETO</Subtitulo>
              <p>
                Acompanhe a Paranáflix no <a href="http://www.instagram.com/paranaflix" target="_blank">Instagram</a>, compartilhe a plataforma, use a plataforma e ajude a levar este conteúdo para mais pessoas.
              </p>
              <br/>
              <Subtitulo cor="var(--rosa)">CONSTRUA CONOSCO</Subtitulo>
              <p>
                Suas experiências ajudam muito a melhorar a plataforma. Compartilhe suas impressões e ideias conosco para que possamos construir este projeto juntes!
              </p>
              <p>
                Você pode falar com a gente através do email <a href = "mailto: paranaflix@pm.me">paranaflix@pm.me</a>, ou pelo <a href="http://www.instagram.com/paranaflix" target="_blank">Instagram</a>
              </p>
            </div>
            <ApoiosWrapper>
              <Subtitulo cor="var(--primary)">QUEM JÁ APOIOU:</Subtitulo>
                <p>
                  <b>Equipe voluntária:</b>
                  <br/>• Marcela Mancino
                  <br/>• Tomás von der Osten
                </p>
                <p>
                  <b>Contribuintes mensais:</b>
                  <br/>• Tiago Lipka
                  <br/>• Lucas Queiroz
                  <br/>• Júlia Nascimento de Souza
                  <br/>• Rafael Urban
                  <br/>• Thayse Fernandes
                </p>
                <p>
                  <b>Contribuintes pontuais:</b>
                  <br/>• Adriel Nizer
                  <br/>• Alexandre Rafael Garcia
                  <br/>• Eduardo Baggio
                  <br/>• William Biagioli
                </p>
            </ApoiosWrapper>
      </SobreWrapper>
      </Base>
      </>
  );
}

export default Apoie;

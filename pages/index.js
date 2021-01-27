import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <QuizLogo className="mx-auto" />
        <Widget>
          <Widget.Header>
            Cabeçalho de um componente Teste deploy
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosEvento) => {
              infosEvento.preventDefault();
              router.push({
                pathname: '/quiz',
                query: { name: nome },
              });
            }}
            >
              <input
                placeholder="Seu nome"
                onChange={(event) => {
                  setNome(event.target.value);
                  console.log('meu retorno ', nome, setNome);
                }}
              />
              <button type="submit" disabled={nome.length === 0} className="ml-3">
                Jogar
              </button>
            </form>
            <h1>The Legend of Zelda</h1>
            <p>Teste ipsum dolor</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}

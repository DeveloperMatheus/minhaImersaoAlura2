import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

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
              <Input
                onChange={(event) => setNome(event.target.value)}
                placeholder="Seu nome"
                name="nomeInput"
                value={nome}
              />
              <Button type="submit" disabled={nome.length === 0} className="mt-5 mb-3">
                Jogar {nome}
              </Button>
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

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';
import AlternativesForm from '../src/components/AlternativesForm';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Content>
        <p>Você acertou
          {results.reduce((actualSum, actualResult) => {
            const isCorrect = actualResult === true;
            if (isCorrect) {
              return actualSum + 1;
            }
            return actualSum;
          }, 0)} perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`result__${index}`}>#{index + 1} resultado: {result === true ? 'Acertou' : 'Errou'}</li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(null);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        className="mx-auto"
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>

        <p className="mt-3">{question.description}</p>

        <AlternativesForm onSubmit={(event) => {
          event.preventDefault();
          setIsQuestionSubmitted(true);
          setTimeout(() => {
            setIsQuestionSubmitted(false);
            setSelectedAlternative(null);
            addResult(isCorrect);
            onSubmit();
          }, 2300);
        }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === index;
            return (
              <Widget.Topic
                htmlFor={alternativeId}
                as="label"
                className="mt-3"
                key={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  onChange={() => {
                    setSelectedAlternative(index);
                  }}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button
            type="submit"
            className="mt-5"
            disabled={selectedAlternative === undefined}
          >
            Confirmar
          </Button>
        </AlternativesForm>

        {/*
          <pre>
            {JSON.stringify(question, null, 4)}
          </pre>
        */}

        <div className="mt-5">
          {isQuestionSubmitted && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmitted && !isCorrect && <p>Você errou!</p>}
        </div>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState([]);
  const question = db.questions[currentQuestion];

  function addResult(result) {
    setResults([...results, result]);
  }

  function handleSubmit() {
    if (currentQuestion + 1 < db.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2000);
  }, []);

  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo className="mx-auto" />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestion}
            totalQuestions={db.questions.length}
            addResult={addResult}
            onSubmit={handleSubmit}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}

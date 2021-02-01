import React, { useEffect } from 'react';
import axios from 'axios';

export default function QuizDetalhePage() {
  useEffect(() => {
    axios.get('https://api.github.com/orgs/axios')
      .then((response) => {
        console.log(response.data);
      }, (error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      Desafio da proxima aula junto com as animações.
    </div>
  );

}

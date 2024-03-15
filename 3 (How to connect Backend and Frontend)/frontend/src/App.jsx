import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <div>
      <h1>Chai and Full-Stack</h1>
      <p>JOKES: {jokes.length}</p>

   
      {jokes.length>0 ? (
        jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))) : (
        <p>Loading Jokes .....</p>
      )
      }
    </div>
  );
};

export default App;

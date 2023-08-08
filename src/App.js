import React, { useState } from 'react';
import './App.css';
import GuessForm from './GuessForm';
import StartGameForm from './StartGameForm';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [secretNumber, setSecretNumber] = useState('');
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleStartGame = (name) => {
    setGameStarted(true);
    setPlayerName(name);
    generateSecretNumber();
  };

  const generateSecretNumber = () => {
    const digits = Array.from({ length: 10 }, (_, i) => i);
    let secret = '';

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      secret += digits.splice(randomIndex, 1)[0];
    }

    setSecretNumber(secret);
    setMessage(`Hello, ${playerName}! Let's start the game. Try to guess the four-digit number.`);
  };

  const handleGuess = () => {
    let plusCount = 0;
    let minusCount = 0;
    let starCount = 0;
    const secretDigits = secretNumber.split('');
    const guessDigits = guess.split('');

    for (let i = 0; i < 4; i++) {
      if (guessDigits[i] === secretDigits[i]) {
        plusCount++;
      } else if (secretDigits.includes(guessDigits[i])) {
        minusCount++;
      } else {
        starCount++;
      }
    }

    const feedback = '+'.repeat(plusCount) + '_'.repeat(minusCount) + '*'.repeat(starCount);
    setMessage(feedback);
    setAttempts(attempts + 1);
  };

  const handlePlayAgain = () => {
    setGuess('');
    setMessage('');
    setAttempts(0);
    generateSecretNumber();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Guess the Number Game</h1>
      </header>
      <div className="App-content">
        {!gameStarted ? (
          <StartGameForm onStartGame={handleStartGame} />
        ) : (
          <div>
            <p>{message}</p>
            <GuessForm
              guess={guess}
              onChange={(e) => setGuess(e.target.value)}
              onGuess={handleGuess}
              attempts={attempts}
            />
            {message === '+_'
              ? <button onClick={handlePlayAgain}>Play Again</button>
              : null
            }
          </div>
        )}
      </div>
    </div>
  );
}



export default App;
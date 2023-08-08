import React from "react";


function GuessForm({ guess, onChange, onGuess, attempts }) {
  return (
    <div>
      <input
        type="text"
        value={guess}
        onChange={onChange}
        maxLength={4}
      />
      <button onClick={onGuess}>Guess</button>
      <p>Attempts: {attempts}</p>
    </div>
  );
} 

export default GuessForm;
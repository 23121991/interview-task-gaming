import { useState } from "react";

function StartGameForm({ onStartGame }) {
    const [name, setName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name.trim() !== '') {
        onStartGame(name);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Start Game</button>
      </form>
    );
  }
  export default StartGameForm;
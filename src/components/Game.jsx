
import { useState, useEffect } from 'react';
import './Game.css';


function Game() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);
  const [nextNumber, setNextNumber] = useState(1);


  useEffect(() => {
    setNextNumber(Math.floor(Math.random() * 100) + 1);
  }, [number]);

  const handleHigher = () => {
    if (nextNumber < number) {
      setCount(count + 1);
    } else {
      // O jogador perdeu, você pode adicionar uma lógica de jogo aqui.
      alert('Você perdeu! Tente novamente.');
      setNumber(1);
      setCount(0); 
    }
  };

  const handleLower = () => {
    if (nextNumber < number) {
      setCount(count + 1);
    } else {
      // O jogador perdeu, você pode adicionar uma lógica de jogo aqui.
      alert('Você perdeu! Tente novamente.');
      setCount(0);
      setNumber(1);
    }
  };

  return (
    <div>
      <h2>Higher or Lower Game</h2>
      <p>Contagem de pontos: {count}</p>
      <p>Número atual: {number}</p>
      <button className="option-button" onClick={handleHigher}>
        Higher
      </button>
      <button className="option-button" onClick={handleLower}>
        Lower
      </button>
    </div>
  );
}

export default Game;
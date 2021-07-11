import React, { useState } from 'react';
import { digResults } from '../helpers';
import Board from './Board';

const styles = {
  width: '400px',
  margin: '20px auto'
}

const stylesHeader = {
  width: '350px',
  margin: '10px auto',
  fontSize: '26px',
  fontWeight: '800',
  lineHeight: '30px'  
}

const stylesInstructions = {
  width: '400px',
  margin: '10px auto',
  fontSize: '16px'  
}

  var winner = null;
  var isDead = null;

const Game = () => {
  const [history, setHistory] = useState([Array(100).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0)
  //const [xIsNext, setXisNext] = useState(true);


  const handleClick = i => {
      const timeInHistory = history.slice(0, stepNumber + 1);
      const current = timeInHistory[stepNumber];
      const squares = [...current];
      var result = digResults();
      // If user click an occupied square or if game is won, return
      if (winner || squares[i] || isDead) return;
      // Put X or O in clicked square
      squares[i] = result;
      setHistory([...timeInHistory, squares]);
      setStepNumber(timeInHistory.length);      
      if (result === "X"){
        winner = result;
      };
      if (result === "֍"){
        isDead = result;
      };
  }

  const jumpTo = step => {
    setStepNumber(step);
    winner = null;
    isDead = null;
  };

  const renderMoves = () => (
    history.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : 'Restart';
      return (
        <li key={move}>
          <button onClick ={() => jumpTo(move)}>{destination}</button>
        </li>
      )
    })
    

  )

  return (
    <>
      <p style={stylesHeader}>Welcome to Treasure hunt</p>
      <p style={stylesInstructions}>Click to dig for for Treasure but watch out for Snakes</p>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>{winner ? "You Found the Treasure!!!" : (isDead ? 'You fell in the Snake Pit and got bit - Game Over!' :'- Click to Dig - ')}</p>
        {renderMoves()}
      </div>
    </>
  )
}

export default Game;
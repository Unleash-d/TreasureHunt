import React from "react";
import Square from './Square'

const style = {
  boarder: '4px solid darkblue',
  boarderRadius: '10px',
  width: '500px',
  height: '450px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(10, 1fr) / repeat(10, 1fr)'
}

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
)

export default Board;
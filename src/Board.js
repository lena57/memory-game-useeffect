import React from 'react';
import Square from "./Square";

const boardStyle = {
  border: "4px solid green",
  width: "400px",
  height: "300px",
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  margin: "0 auto" //at page's center
}

const Board = ({board, openCard}) => {


  return (
    <div style={boardStyle}>
      {board.map((card) => <Square key={card.id} card={card} openCard={openCard}/>)}

    </div>
  );
};

export default Board;

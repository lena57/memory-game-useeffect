import React from 'react';

const squareStyle = {
  border: "2px solid green",
  display: "flex",
  background: "lightgreen",
  marginTop: "-1px",
  marginBottom: "-1px",
  padding: "0px",
  fontWeight: "800",
  fontsize: "12em",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
}

const Square = ({card, openCard}) => {

  return (
    <div style={squareStyle} onClick={()=>openCard(card.id, card.img)}>
      {card.isOpen ? card.img : null}
    </div>
  );
};

export default Square;

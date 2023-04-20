import './App.css';
import Board from "./Board";
import {useEffect, useState} from "react";

function App() {
  const [board, setBoard] = useState(Array(20).fill(null)
    .map((_) => ({id: Math.random().toString(), img: null, isOpen: false})));

  const [history, setHistory] = useState([]);
  const [winner, setWinner] = useState(false);
  const [resultArr, setResultArr] = useState([])

  const emoji = ['🪲', '🪰', '🐞', '🐜', '🐌', '🦋', '🐢', '🐳', '🐙', '🦎'];

  function emojiFun() {
    let newBoard = [...board].map(el => ({...el, img: null, isOpen: false}))
    for (let i = 0; i < emoji.length; i++) {
      for (let j = 1; j <= 2; j++) {
        let index;
        do {
          index = Math.floor(Math.random() * 20)
        }
        while (newBoard[index].img !== null)
        newBoard[index].img = emoji[i]
      }
    }
    return setBoard(newBoard)
  }

  useEffect(() => {
    emojiFun()
  }, [])

  const openCard = (id, img) => {
    const newBoard = board.map((el) => el.id === id ? {...el, isOpen: true} : el)
    setBoard(newBoard)
    setHistory([...history, img])
  }
  console.log('history', history)
  console.log('board', board)

  const checkMove = () => {
    if (history.length % 2 === 0 && history[history.length - 1] !== history[history.length - 2]) {
      //we have to close two last cards
      const newBoard = board.map((el) => el.img === history[history.length - 1]
      || el.img === history[history.length - 2] ? {...el, isOpen: false} : el)
      setBoard(newBoard)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      checkMove()
    }, 500)
  }, [history])

  const calculateWinner = () => {
    const win = board.every(el => el.isOpen === true)
    setWinner(win)
    if (win) {
      setResultArr([...resultArr, (history.length) / 2])
    }
  }

  useEffect(() => {
    if (history.length % 2 === 0) {
      calculateWinner()
    }
  }, [history])

  const restart = () => {
    emojiFun()
    setHistory([])
    setWinner(false)
  }

  useEffect(() => {
    setTimeout(() => {
      restart()
    }, 5000)
  }, [resultArr])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Board board={board} openCard={openCard}/>
      {winner && <h3 style={{color: "green"}}>You won in {(history.length) / 2} steps!</h3>}
      {resultArr.length > 0 && <h4>Your results: {resultArr.map((el) => <li>{el}</li>)}</h4>}

    </div>
  );
}

export default App;

import { useState } from 'react'
import Start from './Start.js'
import Main from './Main.js';
import './App.css';
import Axios from 'axios'
function App() {

  const [guessWord, setGuessWord] = useState('')
  const [gameStarted, setGameStarted] = useState(false)
  function handleChange(event) {
    setGuessWord(event.target.value)
  }

  async function startGame() {
    if (guessWord) {
      console.log(gameStarted)
      setGameStarted(true)
    }

  }
  async function startGameWithRandomWord() {
    const randomGuessWord = await Axios.get('https://germanwordsapi.cyclic.app/randomword')
    setGuessWord(randomGuessWord)
    setGameStarted(true)
  }
  function restartGame() {
    setGuessWord('')
    setGameStarted(false)
  }
  return (
    <>

      {!gameStarted && <Start startGameWithRandomWord={startGameWithRandomWord} startGame={startGame} guessWord={guessWord} handleChange={handleChange} />}
      {gameStarted && <Main guessWord={guessWord} restartGame={restartGame} />}

    </>
  );
}

export default App;

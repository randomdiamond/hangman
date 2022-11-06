import {useState} from 'react'
import Start from './Start.js'
import Main from './Main.js';
import './App.css';

function App() {
  
  const [guessWord, setGuessWord] = useState('')
  const [gameStarted, setGameStarted] = useState(false)
  function handleChange(event){
    setGuessWord(event.target.value)
    {console.log(guessWord)}
  }
  function startGame(){
    console.log(gameStarted)
    setGameStarted(true)
  }
  return (
    <>
    
    {!gameStarted && <Start startGame={startGame} guessWord={guessWord} handleChange={handleChange}/>}
    {gameStarted && <Main guessWord={guessWord}/>}
    
    </>
  );
}

export default App;

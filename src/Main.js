import { useState, useEffect } from 'react'
import Fireworks from './Fireworks';

function Main({ guessWord, restartGame }) {
  const [correctUsedLetters, setCorrectUsedLetters] = useState([])
  const [wrongUsedLetters, setWrongUsedLetters] = useState([])
  const [gameWon, setGameWon] = useState(false)
  const [gameLost, setGameLost] = useState(false)
  const guessWordArray = Array.from(guessWord.toUpperCase())
  const [isConfettiOn, setIsConfettiOn] = useState(false)

  useEffect(() => {
    if (gameWon) {
      setIsConfettiOn(true)
      setTimeout(() => {
        setIsConfettiOn(false)

      }, 2000)
    }

  }, [gameWon])
  useEffect(() => {

    checkIfGameIsWon()
  }, [correctUsedLetters])
  useEffect(() => {
    wrongUsedLetters.length >= 9 && setGameLost(true)
  }, [wrongUsedLetters])
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  function checkIfGameIsWon() {
    let missingWords = 0
    for (let i = 0; i < guessWordArray.length; i++) {
      !correctUsedLetters.includes(guessWordArray[i]) && missingWords++
    }
    if (missingWords === 0) {
      setIsConfettiOn(true)
      setGameWon(true)
    }
  }
  function tryLetter(letter) {
    if (!correctUsedLetters.includes(letter) && !wrongUsedLetters.includes(letter) && !gameLost && !gameLost) {
      if (guessWordArray.includes(letter)) {
        correctUsedLetters.length > 0 ? setCorrectUsedLetters(prevLetters => [...prevLetters, letter]) : setCorrectUsedLetters([letter])
      }
      else {
        wrongUsedLetters.length > 0 ? setWrongUsedLetters(prevLetters => [...prevLetters, letter]) : setWrongUsedLetters([letter])
      }
    }
  }

  function determineLetterBackground(letter) {
    if (correctUsedLetters.includes(letter)) {
      return 'letter-btn correct'
    }
    if (wrongUsedLetters.includes(letter)) {
      return 'letter-btn wrong'
    }
    return 'letter-btn'

  }
  function playAgain() {
    setCorrectUsedLetters([])
    setWrongUsedLetters([])
    gameLost && setGameLost(false)
    gameWon && setGameWon(false)
    restartGame()
  }
  return (
    <>
      <h1>Galgenraten</h1>

      <main>
        <section className='guess-section'>

          <div className='guessWord'>{guessWordArray.map(letter => (
            <span style={(gameLost && !correctUsedLetters.includes(letter)) ? { color: '#b63645' } : {}} className='guessWord-letter'>
              {correctUsedLetters.includes(letter) || gameLost ? letter : '_'}

            </span>
          ))}


          </div>
          <span style={gameWon ? { color: '#18a558' } : { color: '#b63645' }} className='game-message'>{gameWon && 'Gewonnen'}{gameLost && 'Verloren'}</span>
          <button className={gameLost || gameWon ? 'play-again-btn visible' : 'play-again-btn'} onClick={playAgain}>erneut spielen</button>
          <div className='letters-btn-container'>
            {letters.map(letter => (
              <button className={determineLetterBackground(letter)}
                onClick={() => tryLetter(letter)}>{letter}
              </button>))}
          </div>
        </section>
        <section className='hangman-section'>

          <img className='hangman-img' src={require(`./images/hangman${wrongUsedLetters.length}.svg`)}></img>
        </section>
      </main>
      <Fireworks isConfettiOn={isConfettiOn} />
    </>
  );
}

export default Main;
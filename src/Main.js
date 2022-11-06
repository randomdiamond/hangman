import {useState, useEffect} from 'react'


function Main({guessWord}) {
    const [correctUsedLetters, setCorrectUsedLetters] = useState([])
    const [wrongUsedLetters, setWrongUsedLetters] = useState([])
    const [gameWon, setGameWon] = useState(false)
    const [gameLost, setGameLost] = useState(false)
    const guessWordArray = Array.from(guessWord.toUpperCase())
    useEffect(() => {
      guessWordArray.filter(letter => correctUsedLetters.includes(letter)).length === 0 && setGameWon(true)
    },[correctUsedLetters])
    useEffect(() => {
      wrongUsedLetters.length >= 9 && setGameLost(true)
    },[wrongUsedLetters])
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    function tryLetter(letter){
        if(!correctUsedLetters.includes(letter) && !wrongUsedLetters.includes(letter)){
          if(guessWordArray.includes(letter)){
        correctUsedLetters.length > 0 ?  setCorrectUsedLetters(prevLetters => [...prevLetters, letter]) : setCorrectUsedLetters([letter])
   }
   else{
    wrongUsedLetters.length > 0 ?  setWrongUsedLetters(prevLetters => [...prevLetters, letter]): setWrongUsedLetters([letter])
   }
    }}
    
  function determineLetterBackground(letter){
    if(correctUsedLetters.includes(letter)){
      return 'letter-btn correct'
    }
    if(wrongUsedLetters.includes(letter)){
      return 'letter-btn wrong'
    }
      return 'letter-btn'
    
  }
    return (
      <>
        <h1>Galgenraten</h1>
        <main>
          <section className='guess-section'>
            
            <div className='guessWord'>{guessWordArray.map(letter => (
             <span style={(gameLost && !correctUsedLetters.includes(letter)) ? {color:'#b63645'}: {}} className='guessWord-letter'>
              {correctUsedLetters.includes(letter) || gameLost ? letter : '_'}
              </span>
            ))}</div>
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
      </>
    );
  }
  
  export default Main;
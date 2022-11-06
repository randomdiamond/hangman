
export default function Start({handleChange, guessWord,startGame}){
    
    return(
        <>
    <div className='start-container'>
     <h2>Rätselwort eingeben</h2>
     <input type='password' placeholder='Rätselwort' onChange={event => handleChange(event)} value={guessWord} autoFocus/>
     <button onClick={startGame} className="start-btn">starten</button>
     </div>
     
     </>
     )
}

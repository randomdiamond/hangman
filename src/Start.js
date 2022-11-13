
export default function Start({ handleChange, guessWord, startGame, startGameWithRandomWord }) {

    return (
        <>
            <div className='start-container'>
                <h2>Rätselwort eingeben</h2>
                <input type='password' placeholder='Rätselwort' onChange={event => handleChange(event)} value={guessWord} autoFocus />
                <button onClick={startGame} className="start-btn">starten</button>
                <button onClick={startGameWithRandomWord} className="random-word-btn">zufälliges Wort</button>
            </div>

        </>
    )
}

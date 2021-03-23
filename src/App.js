import React from 'react'
import './css/App.css'
import useWordGame from './hooks/useWordGame'


function App() {
  // Variables
  const initialTime = 5

  const { textAreaRef, btnRef, words, running, time, wordCount, handleChange, handleClick } = useWordGame(initialTime)

  return (
    <div className="app">
      <h1 className="title">How fast can you type?</h1>
      <textarea className="inputArea" ref={textAreaRef} name="words" value={words} onChange={handleChange} disabled={!running}/>
      <h4 className="subtitle" >Time remaining: {time}</h4>
      <button className="btn" ref={btnRef} onClick={handleClick} disabled={running}>Start</button>
      <h1 className="title">Word count: {wordCount}</h1>
    </div>
  )
}

export default App;

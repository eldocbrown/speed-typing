import {useState, useEffect, useRef} from 'react'
import { wordCounter } from '../wordCounter'

function useWordGame(
            initialTime = 15,
            initialWords = "",
            initialRunning = false,
            initialWordCount = 0
          ) {

  // State
  const [ words, setWords ] = useState(initialWords)
  const [ time, setTime ] = useState(initialTime)
  const [ running, setRunning ] = useState(initialRunning)
  const [ wordCount, setWordCount ] = useState(initialWordCount)

  // References
  const textAreaRef = useRef(null)
  const btnRef = useRef(null)

  // Hooks
  useEffect(() => {
    if (running) {
      if (time === 0) { // Game ended
        setRunning(false)
        setWordCount(wordCounter(words).words)
        btnRef.current.innerHTML = "Play again"
      }
      else { // Keep running
        setTimeout(
          () => setTime((prevTime) => prevTime - 1)
          , 1000
        )
      }
    }
  }, [time, running])

  // Event Handlers
  const handleChange = (event) => {
    const { value } = event.target
    setWords(value)
  }

  const handleClick = (event) => {
    setWords("")
    setWordCount(0)
    setTime(initialTime)
    setRunning(true)
    textAreaRef.current.disabled = false // You have to do this becasuse states are changed async
    textAreaRef.current.focus()
  }

  return { textAreaRef, btnRef, words, running, time, wordCount, handleChange, handleClick }
}

export default useWordGame

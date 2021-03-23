import {useState, useEffect, useRef, useReducer} from 'react'
import { wordCounter } from '../wordCounter'

function wordsReducer(words, text) {
  return text
}

function useWordGame(
            initialTime = 15,
            initialWords = '',
            initialRunning = false,
            initialWordCount = 0
          ) {

  // State
  const [ words, wordsDispatch ] = useReducer(wordsReducer, initialWords)
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
        setWordCount(wordCounter(textAreaRef.current.value).words)
        btnRef.current.innerHTML = "Play again"
      }
      else { // Keep running
        setTimeout(
          () => setTime((prevTime) => prevTime - 1)
          , 1000
        )
      }
    }
  }, [time, running, textAreaRef])

  // Event Handlers
  const handleChange = (event) => {
    const { value } = event.target
    wordsDispatch(value)
  }

  const handleClick = (event) => {
    wordsDispatch('')
    setWordCount(0)
    setTime(initialTime)
    setRunning(true)
    textAreaRef.current.disabled = false // You have to do this becasuse states are changed async
    textAreaRef.current.focus()
  }

  return { textAreaRef, btnRef, words, running, time, wordCount, handleChange, handleClick }
}

export default useWordGame

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Know your rights!</h1>
      <h2>Flip through the flashcards to learn about your rights as granted to
        you by the Bill of Rights and the U.S. Constitution.
      </h2>
      <p>Count: {count}</p>
      <div className="flashcard">
        <div className="flashcard-front">
          <h3>Front</h3>
        </div>
        <div className="flashcard-back">
          <h3>Back</h3>
        </div>
      </div>
      <div className = "button-wrapper">
        <button className="button-move-left">Left Arrow</button>
        <button className="button-move-right">Right Arrow</button>
      </div>
    </>
  )
}

export default App

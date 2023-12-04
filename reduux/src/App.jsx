import { useState } from 'react'
import './App.css'
import Calculator from './components/calculator'
import CountAverage from './components/countAverage'
import TodoList from './components/todoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculator/>
    <TodoList/>
    <CountAverage/>
    </>
  )
}

export default App

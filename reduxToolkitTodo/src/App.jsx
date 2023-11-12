import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from "react-redux";

function App() {
  const a = 5;
  console.log(a);
  const todos = useSelector(state => state.todos)
  return (
    <>
      {/* <h1>Learn about redux toolkit</h1> */}
      <AddTodo />
      <div className="text-4xl mt-5 text-white">Todos</div>
      <ul className="list-none">
        {
          todos.map((todo) => (
            <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
              <Todos todo={todo} />
            </li>
          ))
        }
      </ul>
      {/* <Todos /> */}
    </>
  )
}

export default App

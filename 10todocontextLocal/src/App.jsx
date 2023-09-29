import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }

  const updateTodo = (id, todo) => {
    // const updatedTodos = todos.map((t) => t.id === todo.id ? todo : t)
    // setTodos(updatedTodos)
    setTodos((prev) => prev.map((preveTodo) => preveTodo.id === id ? todo : preveTodo))
  }

  const deleteTodo = (id) => {
    // const updatedTodos = todos.filter((t) => t.id !== id)
    // setTodos(updatedTodos)
    setTodos((prev) => prev.filter((preveTodo) => preveTodo.id !== id))
  }

  const toggleComplete = (id) => {
    // const updatedTodos = todos.map((t) => t.id === id ? { ...t, completed: !t.completed } : t)
    // setTodos(updatedTodos)
    setTodos((prev) => prev.map((preveTodo) => preveTodo.id === id ? { ...preveTodo, completed: !preveTodo.completed } : preveTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

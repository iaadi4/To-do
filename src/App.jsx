import { useLayoutEffect, useState } from 'react'
import { SiTodoist } from "react-icons/si";
import TodoForm from './components/todoForm/todoForm';
import TodoItem from './components/todoItem/todoItem';
import { TodosProvider } from './context/todoContext';

function App() {

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
  });

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id == id ? todo : prevTodo));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo));
  }

  return (
    <TodosProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='flex flex-col min-h-screen'>

        {/* This contains heading and add todo */}
        <div className='flex flex-col w-full'>

          <div className='mt-36 md:mt-24 mb-12 flex justify-center'>
            <SiTodoist className='h-12 w-8 mr-4 text-customBlue'/>
            <h1 className='text-4xl underline text-customBlue'>My Todo-s</h1>
          </div>

          <div className='flex w-full'>
            <TodoForm />
          </div>
        </div>

        {/* All to-dos */}
        <div className='flex flex-col items-center w-full mt-10'>
            {todos.map((todo) => (
              <div key={todo.id} className='flex w-full'>
                <TodoItem todo ={todo}/>
              </div>
            ))}
        </div>
      </div>
    </TodosProvider>
  )
}

export default App

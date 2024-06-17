import { useLayoutEffect } from 'react'
import { SiTodoist } from "react-icons/si";
import TodoForm from './components/todoForm';

function App() {

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
  });

  return (
    // whole container
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
      <div>

      </div>
    </div>
  )
}

export default App

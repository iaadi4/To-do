import { useLayoutEffect } from 'react'
import { SiTodoist } from "react-icons/si";

function App() {

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
  });

  return (
    // whole container
    <div className='flex flex-col min-h-screen'>
      {/* This contains heading and add todo */}
      <div className='flex flex-col w-full'>
        <div className='flex justify-center'>
          <SiTodoist className='my-16 h-12 w-8 mr-4 text-customBlue'/>
          <h1 className='text-4xl underline text-customBlue my-16'>My Todo-s</h1>
        </div>

        <div className=''>

        </div>
      </div>

      {/* All to-dos */}
      <div>

      </div>
    </div>
  )
}

export default App

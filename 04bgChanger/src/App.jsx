import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('purple')

  return (
    <>
      <div className='w-full flex justify-center items-center h-screen duration-200' style={{ backgroundColor: color }}>
         <h1 className='text-9xl font-mono filter invert' style={{color:color}}>{color}</h1>
        <div className='fixed flex items-center justify-center w-full px-2 inset-x-0 bottom-12'>
          <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-gray-300 px-3 py-2 rounded-full'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white text-center' style={{ backgroundColor: 'red' }}>Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white text-center' style={{ backgroundColor: 'green' }}>green</button>
            <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white text-center' style={{ backgroundColor: 'purple' }}>purple</button>
            <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white text-center' style={{ backgroundColor: 'black' }}>black</button>
            <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black text-center' style={{ backgroundColor: 'white' }}>white</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white text-center' style={{ backgroundColor: 'blue' }}>blue</button>
            <button onClick={() => setColor("hotpink")} className='outline-none px-4 py-1 rounded-full text-white text-center' style={{ backgroundColor: 'hotpink' }}>pink</button>
            <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white text-center' style={{ backgroundColor: 'orange' }}>orange</button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black text-center' style={{ backgroundColor: 'yellow' }}>yellow</button>
            <button onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded-full text-black text-center' style={{ backgroundColor: 'cyan' }}>cyan</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

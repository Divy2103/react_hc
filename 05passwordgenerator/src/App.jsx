import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbreAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let password = ''
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numbreAllowed) string += '0123456789'
    if (charAllowed) string += '!@#$%^&*()_+=[]{}~`'
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(char)
    }
    setPassword(password)
  }, [length, numbreAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()

  }, [length, numbreAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20); 
   window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-3xl mx-auto shadow-md rounded-xl px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white'>password generator</h1>
        <div className='flex shadow rounded-xl overflow-hidden m-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-2 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          {/* <button className='py-3 px-4 outline-none bg-blue-700 text-white font-bold text-lg font-mono'
            onClick={(e) => { navigator.clipboard.writeText(password) }}>Copy</button> */}
              <button className='py-3 px-4 outline-none bg-blue-700 text-white font-bold text-lg font-mono'
            onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm justify-between">
          <div className='flex items-center gap-x-1'>
            <input type="range"
              id='length'
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="length">Length : {length}</label>
          </div>
          <div className='flex items-center'>
            <input type="checkbox"
              defaultChecked={numbreAllowed}
              id='numberInput'
              onChange={(e) => setNumberAllowed((prev) => !prev)} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numbreAllowed}
              id='numberInput'
              onChange={(e) => setCharAllowed((prev) => !prev)} />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

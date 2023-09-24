import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: "divy",
    age: 20,
    address: {
      city: "morbi",
      state: "gujarat",
      country: "india"
    }
  }
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <h1 className='text-3xl bg-green-700 p-3 rounded-md'>Vite with tailwind</h1>
      <Card username={"kaila"} myArr={newArr} />
      <Card username="smit" post="mpl khel ke paise kamana" />
      <Card myObj={myObj}/>
    </>
  )
}

export default App

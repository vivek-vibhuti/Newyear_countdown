import { useState } from 'react'

import './App.css'
 import { Nav } from './Nav'
 import { NewYearCountdown } from './NewYearCountdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <NewYearCountdown className="text-white"/>
     
    <h1 className='flex justify-center text-black mt-10 hover:font-extrabold hover:animate-pulse'>created by vivek-vibhuti</h1>
    </>
  )
}

export default App

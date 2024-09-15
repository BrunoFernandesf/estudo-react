import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Img from './assets/img1.jpg'
import ManageData from './components/ManageData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Seção 03</h1>
        <img src='/img1.jpg' alt='Paisagem'/>
        <div>
          <img src={Img} alt='Paisagem'/>
        </div>
        <ManageData/>
      </div>
    </>
  )
}

export default App

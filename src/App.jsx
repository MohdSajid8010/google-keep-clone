import { useState } from 'react'
import './styles/App.css'
import Navbar from './component/Navbar'
import Main from './component/Main'

function App() {

  return (
    <div className='app'>
      <Navbar></Navbar>
      <Main />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from '../components/nav'
import UserDetails from '../components/userDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <UserDetails/>
    </>
  )
}

export default App

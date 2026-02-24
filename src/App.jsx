import { useState } from 'react'
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

import './App.css'
import Nav from '../components/nav'
import UserDetails from '../components/userDetails'
import Pill from '../components/Pill'
import Remark from '../components/remark'

function App() {
return (
  <>
    <Nav/>
    <h1 className='m-12 text-[14px] font-semibold'>Back to Results</h1>
    <UserDetails/>
    <Pill/>
    <Remark/>
  </>
)
}

export default App

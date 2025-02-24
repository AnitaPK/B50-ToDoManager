import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddComponent from './components/AddComponent'
import ShowList from './components/ShowList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddComponent />
      <hr></hr>
      <ShowList />
    </>
  )
}

export default App

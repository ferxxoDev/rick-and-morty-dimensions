import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'

function App() {

  const [location, setLocation] = useState()

  useEffect(() => {
    const random = getRandomNumber()
    const URL = `https://rickandmortyapi.com/api/location/${random}`

    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err =>console.log(err))

  }, [])
  
  console.log(location);


  return (
    <div className="App">
      <h1>Entregable 3</h1>
      <LocationInfo/>
    </div>
  )
}

export default App

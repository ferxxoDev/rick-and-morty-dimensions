import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'

function App() {

  const [location, setLocation] = useState()

  useEffect(() => {
    const random = getRandomNumber()
    const URL = `https://rickandmortyapi.com/api/location/${random}`

    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err =>console.log(err))

  }, [])
  

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <LocationInfo location={location}/>
      
      <div>
      {
        location?.residents.map(url => (
          <CardResident 
          key={url}
          url={url}
          />
        ))
      }
      </div>

    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'

function App() {

  const [location, setLocation] = useState()

  const [searchInput, setSearchInput] = useState('')

  console.log(searchInput);

  useEffect(() => {
    let id = getRandomNumber()
    if(searchInput){
      id = searchInput
    }
    
    const URL = `https://rickandmortyapi.com/api/location/${random}`

    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err =>console.log(err))

  }, [searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
  }

  return (
    <div className="App">
      <h1>Rick and Morty</h1>

      <form onSubmit={handleSubmit}>
        <input
          id='idLocation'
          placeholder='Enter another number from 1 to 126' type="text" />
        <button>Search</button>
      </form>

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

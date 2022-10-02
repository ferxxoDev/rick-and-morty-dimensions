import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import Error from './components/Error'

function App() {
  
  // Para guardar una location
  const [location, setLocation] = useState()
  // Para guardar la informacion del input y hacer la peticion cuando se hace sumbit
  const [searchInput, setSearchInput] = useState('')
  // Para guardar las sugerencias de la apo
  const [suggestedList, setsuggestedList] = useState()
  // Para indicar si hay error o no
  const [hasError, setHasError] = useState(false)



  useEffect(() => {
    let id = getRandomNumber()
    if(searchInput){
      id = searchInput
    }
    
    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err =>setHasError(true))

  }, [searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
  }

  const hadleChange = event => {

    if(event.target.value === '') {
      setsuggestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

    axios.get(URL)
      .then(res => setsuggestedList(res.data.results))
      .catch(err => console.log(err))
    }

  }


  return (
    <div className="App">
      <h1>Rick and Morty</h1>

      <form onSubmit={handleSubmit}>
        <input
          id='idLocation'
          placeholder='Enter another number from 1 to 126' 
          type="text" 
          onChange={hadleChange}
          />
        <button>Search</button>
        <FilterList 
          suggestedList={suggestedList}
          setSearchInput={setSearchInput}
        />
      </form>

     { 
        hasError ?
        <Error/>
        :
        <>
          <LocationInfo location={location}/>
          <div className='card-container'>
            {
              location?.residents.map(url => (
                <CardResident 
                  key={url}
                  url={url}
                />
              ))
            }
       </div>
       </>
     }

    </div>
  )
}

export default App

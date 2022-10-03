import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import Error404 from './components/Error404'
import SearchBar from './components/SearchBar'

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
    if (searchInput) {
      id = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err => setHasError(true))

  }, [searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
    event.target.idLocation.value = ""
    setsuggestedList()
  }

  const handleChange = event => {

    if (event.target.value === '') {
      setsuggestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

      axios.get(URL)
        .then(res => setsuggestedList(res.data.results))
        .catch(err => console.log(err))
      console.log(setsuggestedList)
    }

  }


  return (
    <div className="App">
      <div className='titlePage'>
        <img className="logoTitle" src="../images/Rick_and_Morty.svg" alt="dont show" />
        <div className="barTitle">
          {/* <h1>Rick and Morty <span>APP</span></h1> */}
          <SearchBar 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            suggestedList={suggestedList}
            setSearchInput={setSearchInput}
            setsuggestedList={setsuggestedList}
          />
        </div>
      </div>



      {
        hasError ?
          <Error404 />
          :
          <>
            <LocationInfo location={location} />
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

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardResident = ({url}) => {

    const [resident, setResident] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => setResident(res.data))
        .catch(err => console.log(err))
    }, [])
    

  return (
    <article>
        <header>
            <img src={resident?.image} alt="" />
            <div>
                <div className='circle'></div>
                <span>{resident?.status}</span>
            </div>
        </header>

        <section>
            <h3>{resident?.name}</h3>
            <ul>
                <li><span>Species: </span>{resident?.species}</li>
                <li><span>Origin: </span>{resident?.origin.name}</li>
                <li><span>Episodes where appear: </span>{resident?.episode.length}</li>
            </ul>
        </section>

    </article>
  )
}

export default CardResident
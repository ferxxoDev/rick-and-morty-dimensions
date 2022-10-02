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
    <div>CardResident</div>
  )
}

export default CardResident
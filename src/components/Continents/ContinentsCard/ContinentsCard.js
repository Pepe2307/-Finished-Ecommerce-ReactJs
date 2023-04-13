import './Continents_Styles.css'

import React from 'react'

const ContinentsCard = ({titulo_cont,imagen_cont}) => {
  return (
    <div>
        <div className='Continentes_Container'>
            <div className='Continente'
                style={{ backgroundImage: `url(${imagen_cont})` }}>

                <h1> { titulo_cont } </h1>
                
            </div>
        </div>
    </div>
  )
}

export default ContinentsCard
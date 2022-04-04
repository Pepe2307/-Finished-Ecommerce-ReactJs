import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Card.css'

const Card = ({ props }) => {
  return (
    <div className='Card'>
        {/* Meter Props image */}

        <div className='imagen'>
            <img src={require('../../recursos/Cards/forest.jpg')}></img>
            {/* <img src={require(props.imagen)}></img> */}
        </div>

        {/* <img src={require('props')}></img> */}

        <h1>Titulo Lugar</h1>
        <p>Descripcion</p>
        
        <h3>Cantidad de Pasajes</h3>
        
        <ItemCount/>
    </div>
  )
}


export default Card
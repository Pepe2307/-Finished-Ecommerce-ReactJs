import React from 'react'
import Continents_Card from '../Continents_Card/Continents_Card'
import './Continent_ListStyle.css'

const Continent_List = ( {products} ) => {
  return (
    <div className='GaleriaContinentes'>

        <Continents_Card
        titulo_cont='Europa'
        imagen_cont={require('../../../recursos/Continentes/coliseo1.jpg')}/>
        
        <Continents_Card
        titulo_cont='Norteamerica'
        imagen_cont={require('../../../recursos/Continentes/goldengate.jpg')}/>

        <Continents_Card
        titulo_cont='Sudamerica'
        imagen_cont={require('../../../recursos/Continentes/cristoredentor.jpg')}/>

        <Continents_Card
        titulo_cont='Asia'
        imagen_cont={require('../../../recursos/Continentes/japan.jpg')}/>

    </div>
  )
}

export default Continent_List

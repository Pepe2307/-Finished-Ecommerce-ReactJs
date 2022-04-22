import React from 'react'
import Continents_Card from '../Continents_Card/Continents_Card'
import './Continent_ListStyle.css'
/*REACT ROUTER*/
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'


const Continent_List = ( {products} ) => {
  return (
    <div className='GaleriaContinentes'>


        <Link to='/categoria/norteamerica' className='cont_link'>
            <Continents_Card
            titulo_cont='Norteamerica'
            imagen_cont={require('../../../recursos/Continentes/goldengate.jpg')}/>
        </Link>

        <Link to='/categoria/europa' className='cont_link'>
            <Continents_Card
            titulo_cont='Europa'
            imagen_cont={require('../../../recursos/Continentes/coliseo1.jpg')}/>
        </Link>

        <Link to='/categoria/sudamerica' className='cont_link'>
            <Continents_Card
            titulo_cont='Sudamerica'
            imagen_cont={require('../../../recursos/Continentes/cristoredentor.jpg')}/>
        </Link>

        <Link to='/categoria/asia' className='cont_link'>
            <Continents_Card
            titulo_cont='Asia'
            imagen_cont={require('../../../recursos/Continentes/japan.jpg')}/>
        </Link>



    </div>
  )
}

export default Continent_List

import './Continent_ListStyle.css'

import ContinentsCard from '../ContinentsCard/ContinentsCard'
import { Link } from 'react-router-dom'
import React from 'react'

const Continent_List = ( {products} ) => {
  return (
    <div className='GaleriaContinentes'>

        <Link to='/category/norteamerica' className='cont_link'>
            <ContinentsCard
            titulo_cont='Norteamerica'
            imagen_cont={require('../../../recursos/Continentes/goldengate.jpg')}/>
        </Link>

        <Link to='/category/europa' className='cont_link'>
            <ContinentsCard
            titulo_cont='Europa y Africa'
            imagen_cont={require('../../../recursos/Continentes/coliseo1.jpg')}/>
        </Link>

        <Link to='/category/sudamerica' className='cont_link'>
            <ContinentsCard
            titulo_cont='Sudamerica'
            imagen_cont={require('../../../recursos/Continentes/cristoredentor.jpg')}/>
        </Link>

        <Link to='/category/asia' className='cont_link'>
            <ContinentsCard
            titulo_cont='Asia'
            imagen_cont={require('../../../recursos/Continentes/japan.jpg')}/>
        </Link>

    </div>
  )
}

export default Continent_List

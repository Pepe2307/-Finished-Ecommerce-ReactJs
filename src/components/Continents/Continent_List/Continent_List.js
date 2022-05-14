import React from 'react'
import Continents_Card from '../Continents_Card/Continents_Card'
import './Continent_ListStyle.css'
/*REACT ROUTER*/
import { Link, NavLink } from 'react-router-dom'
/* import { getCategories } from '../../../asyncmock'; */
import CartWidget from '../../CartWidget/cartWidget';
import { getCategories } from '../../../asyncmock';

const Continent_List = ( {products} ) => {
  return (
    <div className='GaleriaContinentes'>


        <Link to='/category/norteamerica' className='cont_link'>
            <Continents_Card
            titulo_cont='Norteamerica'
            imagen_cont={require('../../../recursos/Continentes/goldengate.jpg')}/>
        </Link>

        <Link to='/category/europa' className='cont_link'>
            <Continents_Card
            titulo_cont='Europa y Africa'
            imagen_cont={require('../../../recursos/Continentes/coliseo1.jpg')}/>
        </Link>

        <Link to='/category/sudamerica' className='cont_link'>
            <Continents_Card
            titulo_cont='Sudamerica'
            imagen_cont={require('../../../recursos/Continentes/cristoredentor.jpg')}/>
        </Link>

        <Link to='/category/asia' className='cont_link'>
            <Continents_Card
            titulo_cont='Asia'
            imagen_cont={require('../../../recursos/Continentes/japan.jpg')}/>
        </Link>

        

    </div>
  )
}

export default Continent_List

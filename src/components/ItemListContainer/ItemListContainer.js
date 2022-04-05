import React from 'react'
import Card from '../Cards/Card'
import './ItemListConainerStyle.css'

import foto from '../../recursos/Cards/ayumu.png'
import forest from '../../recursos/Cards/forest.jpg'
import chika from '../../recursos/Cards/chika-space.jpg'

const ItemListContainer = ({ props }) => {
  return (
    <div>
        <h3 className='titulo_prop'>Bienvenido usuario: {props}</h3>
        <h2>Lista de lugares a visitar:</h2>

        <div className='galeria_shop'>
            <Card 
            img={forest}
            titulo="Bosque"
            descripcion="Bosque descripcion y precio"/>
           
           <Card 
            img={require('../../recursos/Cards/city.jpg')}
            titulo="Ciudad"
            descripcion="Ciudad descripcion"/>

            <Card 
            img={foto}
            titulo="Bosque"
            descripcion="Bosque descripcion"/>

            <Card 
            img={chika}
            titulo="Bosque"
            descripcion="Bosque descripcion"/>


            <Card 
            img={require('../../recursos/Cards/starry-night.jpg')}
            titulo="Bosque"
            descripcion="Bosque descripcion"/>

            <Card 
            img={require('../../recursos/Cards/london.jpg')}
            titulo="London"
            descripcion="London LOREM"/>

            <Card 
            img={forest}
            titulo="Bosque"
            descripcion="Bosque descripcion"/>

            <Card 
            img={forest}
            titulo="Bosque"
            descripcion="Bosque descripcion"/>

        </div>
    </div>
  )
}

export default ItemListContainer
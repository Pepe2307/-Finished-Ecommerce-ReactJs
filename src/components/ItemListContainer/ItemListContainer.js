import React from 'react'
import Card from '../Cards/Card'
import './ItemListConainerStyle.css'

const ItemListContainer = ({ props }) => {
  return (
    <div>
        <h3 className='titulo_prop'>Bienvenido usuario: {props}</h3>
        <h2>Lista de lugares a visitar:</h2>

        <div className='galeria_shop'>
            <Card/>
            <Card/>
            <Card/>

            <Card/>
            <Card/>
            <Card/>

        </div>
    </div>
  )
}

export default ItemListContainer
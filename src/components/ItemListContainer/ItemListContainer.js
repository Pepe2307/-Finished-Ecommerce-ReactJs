import React from 'react'
import './ItemListConainerStyle.css'

const ItemListContainer = ({ props }) => {
  return (
    <div>
        <h3 className='titulo_prop'>Bienvenido usuario: {props}</h3>
        

    </div>
  )
}

export default ItemListContainer
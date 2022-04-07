/* import React from 'react'
import './ItemListConainerStyle.css'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({props}) => {
  return (
    <div>
        <h3 className='titulo_prop'>Bienvenido usuario: {props}</h3>
        <h2>Lista de lugares a visitar:</h2>
        
        <ItemList/>

    </div>
  )
}

export default ItemListContainer */


/* SEPARADOR ENTRE VIEJA Y NUEVA VERSION */

import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
   }, [])

    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
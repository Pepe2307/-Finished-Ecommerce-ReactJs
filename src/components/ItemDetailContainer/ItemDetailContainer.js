import React from 'react'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetails from '../ItemDetail/ItemDetail'
/* import './ItemListConainerStyle.css' */

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProductsById().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
   }, [])

    return(
        <div>
            <ItemDetails products={products}/>
        </div>
    )
}

export default ItemListContainer
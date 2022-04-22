import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import './ItemListConainerStyle.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    
    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
   }, [categoryId])

    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
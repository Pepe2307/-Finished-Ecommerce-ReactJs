import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import './ItemListConainerStyle.css'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index.js'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState()
    const {categoryId} = useParams()
    const [show, setShow] = useState(false)

    useEffect(() => {
        /* getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error) */


        const collectionRef = categoryId
        ? query(collection (firestoreDb, 'products'), where('category', '==', categoryId))
        : collection (firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)


        })
   }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Nuestros Destinos:')
        }, 2000)
    })

    /* if(products.length === 0) {
        return <h1 className='titulo_general'>No hay productos de esta categoría</h1>
    } */


    
    const handleClick = () => {
        console.log('click en item list container')
    }

   
    return(
        <div onClick={handleClick}>
            <div className='titulo_general'>{title}</div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
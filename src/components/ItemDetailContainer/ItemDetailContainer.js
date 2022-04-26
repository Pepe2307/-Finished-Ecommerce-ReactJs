import React from 'react'
import { useState, useEffect } from 'react'

import { getProductsById }  from '../../asyncmock'
import { getProductsbyId } from '../../asyncmock.js'

import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainerStyles.css'



const ItemDetailContainer = ( { setCart, cart } ) => { 
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    const { productId } = useParams()

    useEffect( () => {
        getProductsById(productId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally (() => {
            setLoading(false)
        })


        return (() => {
            setProduct()
        })

    }, [productId])




    return (
        <div className="ItemDetailContainer" >
            {
                loading ?
                     <>
                     <h1 className='texto_carga'>CARGANDO...</h1>
                     <h1 className='texto_carga'>CARGANDO...</h1>
                     <h1 className='texto_carga'>CARGANDO...</h1>
                     </>:
                product ?
                     <ItemDetail  {...product}  setCart={setCart} cart={cart} /> :
                     <h1>El producto no existe</h1>
            }
        </div>
    )
}

export default ItemDetailContainer
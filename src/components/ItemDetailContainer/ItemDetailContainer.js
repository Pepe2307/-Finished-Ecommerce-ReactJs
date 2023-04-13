import './ItemDetailContainerStyles.css'

import { useEffect, useState } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import React from 'react'
import { getProductsById }  from '../../asyncmock'
import { useParams } from 'react-router-dom'
import world from '../../recursos/world2.png'

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
                     <h1 className='texto_carga'>Simulacion de carga...</h1>
                     <img src={world} className="carga-logo" alt="logo" />
                     </>:
                product ?
                     <ItemDetail  {...product}  setCart={setCart} cart={cart} /> :
                     <h1>El producto no existe</h1>
            }
        </div>
    )
}

export default ItemDetailContainer
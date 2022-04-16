/* import React from 'react'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = (props) => {
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
            <ItemDetail products={products}/>
        </div>
    )
}

export default ItemDetailContainer
 */

/* NEW VER*/
import React from 'react'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => { 
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        getProductsById(1). then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally (() => {
            setLoading(false)
        })


        return (() => {
            setProduct()
        })

    }, [])

    return (
        <div className="ItemDetailContainer" >
            {
                loading ?
                     <h1>CARGANDO...</h1> :
                product ?
                     <ItemDetail {...product} /> :
                     <h1>El producto no existe</h1>
            }
        </div>
    )
}

export default ItemDetailContainer
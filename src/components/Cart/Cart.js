import './Cart.css'

import { useContext, useEffect } from 'react'

import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'
import React from 'react'

const Cart = () => {

    useEffect(() => {

        window.scrollTo(0, 9999)
        
    }, [])
    
    const { cart } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <>
                <Link className='sin_productos' to={`/`}><br/> No hay productos, <br/> ¿Volver atras?</Link>
            </>
        )
    }

    return (
        <>
            <ItemCart/>
        </>
    )
}

export default Cart
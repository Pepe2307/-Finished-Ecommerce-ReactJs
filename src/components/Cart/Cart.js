import React from 'react'
import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <>
                <Link className='sin_productos' to={`/`}>No hay productos, Volver atras?</Link>
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
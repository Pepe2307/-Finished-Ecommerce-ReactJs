import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const ItemCart = () => {

    const { cart, removeItem, totalCost, clearCart, finishBuy } = useContext(CartContext)

    return (
        <div>
            <ul>
            {cart.map(prod => <li key={prod.id}>{prod.name}  cantidad: {prod.quantity} precio unidad: ${prod.price}  subtotal: ${prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}>-</button></li>)}   
            Total: {totalCost()}
        </ul>
        <button onClick={()=> clearCart()}>Vaciar carrito</button>
        <button onClick={()=> finishBuy()}>Finalizar compra</button>
        </div>
    )
}

export default ItemCart
import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './ItemCart.css'

const ItemCart = () => {

    const { cart, removeItem, totalCost, clearCart, finishBuy } = useContext(CartContext)

    return (
        <div>
            <ul className='lista_compra'>
            {cart.map(prod => <li key={prod.id}> Pasaje para:  {prod.name}<br/>
            Cantidad:  {prod.quantity}<br/>
            Precio unidad:  ${prod.price}<br/>
            Subtotal:  ${prod.quantity * prod.price}<br/>
            Total: ${totalCost()}<br/>
            <button className='boton_detalle' onClick={() => removeItem(prod.id)}>Eliminar</button></li>)}   
            

            <button className='boton_detalle' onClick={()=> clearCart()}>Vaciar carrito</button>
            <button className='boton_detalle' onClick={()=> finishBuy()}>Finalizar compra</button>
        </ul>
        
        </div>
    )
}

export default ItemCart
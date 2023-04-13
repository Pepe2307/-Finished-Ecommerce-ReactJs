import './ItemCart.css'

import CartContext from '../../context/CartContext'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { useContext } from 'react'

const ItemCart = () => {

    const { cart, removeItem, totalCost, clearCart } = useContext(CartContext)


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

            <button className='boton_detalle'>
                <NavLink className={'boton_compra'} to='/form'>
                    Finalizar compra
                </NavLink>
            </button>

        </ul>
        
        </div>
    )
}

export default ItemCart
import './ItemDetailStyle.css'
import React from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'


const ItemDetail = ({ id, img, name, place_detail, category, price, stock}) => {

    const [quantity, setQuantity]= useState(0)
    const { addItem, isInCart } = useContext(CartContext)
    const { setNotification } = useNotification()

    const handleOnAdd = (count) => {

        setQuantity(count)

        const productObj = {
            id, name, price
        }

        addItem ({...productObj, quantity: count})

        setNotification('success', `Agregaste ${count} Pasajes para: ${name}`)

    }


    return(
        <div className='ItemDetail'>

                <div className='imagen'>
                    <img src={img} alt={name}/>
                </div>


                <h1>Detalles - {name}</h1>
                <p>{place_detail}</p>
                {/* <p>Categoria: {category}</p> */}
                <p>Precio: {price}</p>

                
                <div>
                    {<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>}
                </div>

                {/* <footer className='ItemFooter'>
                    isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> :
                    <ItemCount  onAdd={handleAdd} stock={stock} />
                </footer> */}
        </div>
    )
}
export default ItemDetail
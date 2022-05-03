import './ItemDetailStyle.css'
import React from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import CartContext from '../CartContext/CartContext'



const ItemDetail = ({ id, img, titulo, descripcion, category, price, stock}) => {


    const { addItem, isInCart } = useContext(CartContext)


    const handleAdd = (count) => {
        const productObj = {
            id, titulo,price
        }

        addItem(productObj)
    }
    

    return(
        <div className='ItemDetail'>

                <div className='imagen'>
                    <img src={img} alt={titulo}/>
                </div>


                <h1>Detalles - {titulo}</h1>
                <p>{descripcion}</p>
                <p>Categoria: {category}</p>
                <p>Precio: {price}</p>

                <ItemCount/>

                <footer className='ItemFooter'>
                    { isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> :
                    <ItemCount onAdd={handleAdd} stock={stock}/> } 
                </footer>
        </div>
    )
}
export default ItemDetail





/* 
import React from 'react'
import './ItemDetailStyle.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../CartContext/CartContext'


const ItemDetail = ({ id, titulo, img, category, description, price, stock }) => {
    const { addItem, isInCart, getQuantityProd } = useContext(CartContext)


    const handleAdd = (count) => {
        const productObj = {
            id, titulo,price, quantity: count
        }

        addItem(productObj)
}

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {titulo}
                </h2>
            </header>
            <picture>
                <img src={img} alt={titulo} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                { 
                    false  
                        ? <Link to='/cart' className='Option'>Ir al carrito</Link> 
                        : <ItemCount onAdd={handleAdd} stock={stock} initial={getQuantityProd(id)}/> 
                } 
            </footer>
        </article>
    )
}

export default ItemDetail */
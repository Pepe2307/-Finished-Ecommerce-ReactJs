import './ItemDetailStyle.css'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { ItemDetailContainer, Detail } from './ItemDetail.elements'
import { useState, useContext } from 'react'
import CartContext from '../CartContext/CartContext'



const ItemDetail = ({ id, img, titulo, descripcion, categoria, price, stock, setCart }) => {


    const [ quantity , setQuantity] = useState(0)
    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (count) => {
        console.log('agregar al carrito')
        setQuantity(count)


        const objProd = {id, nombre_prod, price, quantity}
        /* const productObj = { id, name, price} */


        addItem ({...productObj, quantity: count})
    }


    

    return(
        <div className='ItemDetail'>

                <div className='imagen'>
                    <img src={img} alt={titulo}/>
                </div>


                <h1>Detalles - {titulo}</h1>
                <p>{descripcion}</p>
                <p>Categoria: {categoria}</p>
                <p>Precio: {price}</p>

                <ItemCount /* setCart={setCart} objeto={objProd} */ />

                {isInCart(id) ? <Link to='/cart'><AddToCart>Ir al carrito</AddToCart></Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>}
                {/* {quantity > 0 ? <Link to='/cart'><span>Agregar al carrito</span></Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>} */}
                {/* COMO IMPLEMENTAR^^^ */}
                {/* COMO IMPLEMENTAR^^^ */}
                {/* COMO IMPLEMENTAR^^^ */}
        </div>
    )
}
export default ItemDetail
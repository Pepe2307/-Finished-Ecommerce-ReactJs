/* NEW VER*/
import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetailStyle.css'

const ItemDetail = ({ id, img, titulo, descripcion, categoria, precio, stock, setCart }) => {

    /* const [quantity , setAquantity] = useState(0) */


    /* const objProd = {id, nombre_prod, price, quantity} */


    return(
        <div className='ItemDetail'>

                <div className='imagen'>
                    <img src={img} alt={titulo}/>
                </div>


                <h1>Detalles - {titulo}</h1>
                <p>{descripcion}</p>
                <p>Categoria: {categoria}</p>
                <p>Precio: {precio}</p>

                <ItemCount /* setCart={setCart} objeto={objProd} */ />

        </div>
    )
}
export default ItemDetail
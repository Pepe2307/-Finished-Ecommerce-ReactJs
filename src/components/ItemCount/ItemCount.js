import React, { useState } from 'react'
import './ItemCountStyle.css'
import CartWidget from '../CartWidget/cartWidget';
/*REACT ROUTER*/
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const ItemCount = ( {initial, stock,onAdd, setCart,objeto} ) => {
    const [contador, setContador] = useState(0);
  return (
    <div>
        <h2 className='counter'>{contador}</h2>
        
        <button className='raise' onClick={() => setContador (contador +1)}
        disabled={contador === 3}>Incrementar
        </button>
        
        {/* <CartWidget numero={0}/> */}

        <button className='raise' onClick={() => setContador (contador -1)}
        disabled={contador === 0}>Decrementar
        </button>

        <button className='raise' onClick={() => setContador (contador -contador)}>Reset
        </button>


        <Link to='/cart'>
            <button className='raise' onClick={() => console.log(contador)}>
    
                {/* onClick={ () => {
                    console.log(contador);
                    setCart(objeto)}
                }> */}
                
                Comprar
            </button>
        </Link>

        
    </div>
  )
}

export default ItemCount
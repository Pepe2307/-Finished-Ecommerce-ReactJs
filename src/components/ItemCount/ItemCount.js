import React, { useState } from 'react'
import './ItemCountStyle.css'
import CartWidget from '../CartWidget/cartWidget';
/*REACT ROUTER*/
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const ItemCount = ( {initial, stock, onAdd} ) => {
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if (count > initial){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }


  return (
    <div>
        {/* <CartWidget numero={0}/> */}

        <h2 className='counter'>{count}</h2>


        
        <button className="btn" onClick={decrement}>-</button>    
        <button className="btn" onClick={increment}>+</button>

        {/* <button className='raise' onClick={decrement}>Decrementar</button>        
        <button className='raise' onClick={increment}>Incrementar</button> */}


        {/* <button className='raise' onClick={() => setCount (count +1)}
        disabled={count === 3}>Incrementar
        </button>

        <button className='raise' onClick={() => setCount (count -1)}
        disabled={count === 0}>Decrementar
        </button> */}

        <button className='raise' onClick={() => setCount (count - count)}>Reset
        </button>

        <button className='raise' onClick={()=> onAdd(count)}>Agregar al carrito</button>

        {/* <Link to='/cart'>
            <button className='raise' onClick={ () => {
                console.log(count);}}>
                    Comprar
            </button>
        </Link> */}

        
    </div>
  )
}

export default ItemCount
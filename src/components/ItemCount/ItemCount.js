import React, { useState } from 'react'
import './ItemCountStyle.css'



const ItemCount = () => {
    const [contador, setContador] = useState(0);
  return (
    <div>
        <h2 className='counter'>{contador}</h2>
        
        <button className='raise' onClick={() => setContador (contador +1)}
        disabled={contador === 3}>Incrementar
        </button>
        
        <button className='raise' onClick={() => setContador (contador -1)}
        disabled={contador === 0}>Decrementar
        </button>

        <button className='raise' onClick={() => setContador (contador -contador)}>Reset
        </button>
    </div>
  )
}

export default ItemCount
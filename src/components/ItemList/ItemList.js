import React from 'react'
import Card from '../Cards/Card'

const ItemList = ( {products} ) => {

    return(
        <div className='galeria_shop'>
            {products.map(prod => <Card key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList
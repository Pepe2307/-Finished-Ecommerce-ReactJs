/* import React from 'react'
import Card from '../Cards/Card'

import foto from '../../recursos/Cards/ayumu.png'
import forest from '../../recursos/Cards/forest.jpg'
import chika from '../../recursos/Cards/chika-space.jpg'

const ItemList = () => {
  return (
        <div className='galeria_shop'>
            <Card 
            img={forest}
            titulo="Bosque"
            descripcion="Bosque descripcion y precio"/>

           <Card 
            img={require('../../recursos/Cards/city.jpg')}
            titulo="Ciudad"
            descripcion="Ciudad descripcion"/>

            <Card 
            img={require('../../recursos/Cards/waterfall.jpg')}
            titulo="Cascada"
            descripcion="Bosque descripcion"/>


            <Card 
            img={require('../../recursos/Cards/sea.jpg')}
            titulo="Oceano"
            descripcion="Bosque descripcion"/>

            <Card 
            img={require('../../recursos/Cards/starry-night.jpg')}
            titulo="Egipto"
            descripcion="Bosque descripcion"/>

            <Card 
            img={require('../../recursos/Cards/london.jpg')}
            titulo="London"
            descripcion="London LOREM"/>


            <Card 
            img={forest}
            titulo="Bosque"
            descripcion="Bosque descripcion"/>

            <Card 
            img={forest}
            titulo="Bosque"
            descripcion="Bosque descripcion"/>
    </div>
  )
}

export default ItemList */


/* SEPARADOR ENTRE VIEJA Y NUEVA VERSION */
import React from 'react'
/* import Item from '../Item/Item'*/
import Card from '../Cards/Card'

const ItemList = ( {products} ) => {
    return(
        <div>
            {products.map(prod => <Card key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList
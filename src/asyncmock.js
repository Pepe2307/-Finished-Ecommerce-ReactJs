import forest from './recursos/Cards/forest.jpg'
import ciudad from './recursos/Cards/city.jpg'
import cascada from './recursos/Cards/waterfall.jpg'

const products = [
    {
        id:1,
        img:require('./recursos/Cards/forest.jpg'),
        titulo:"Bosque",
        descripcion:"Bosque descripcion y precio"
    },
    {
        id:2,
        img:require('./recursos/Cards/city.jpg'),
        titulo:"Ciudad",
        descripcion:"Ciudad descripcion"
    },
    {
        id:3,
        img:require('./recursos/Cards/waterfall.jpg'),
        titulo:"Cascada",
        descripcion:"Cascada descripcion"
    },

    /* {   id: 1,
        name: 'iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    { id: 2, name: 'samsung s21', price: 800, category: 'celular', img: 'https'},
    { id: 3, name: 'Ipad 8va generacion', price: 1200, category: 'tablet', img:'https'} */
]

export const getProducts = () => {

    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
  
const products = [
    {
        id:1,
        img:require('./recursos/Cards/forest.jpg'),
        name:"Bosque",
        place_detail:"Bosque place_detail y precio",
        category:"sudamerica",
        price:5000,
        stock: '5'
    },
    {
        id:2,
        img:require('./recursos/Cards/city.jpg'),
        name:"Ciudad",
        place_detail:"Ciudad place_detail",
        category:"norteamerica",
        price:10000,
        stock: '5'
    },
    {
        id:3,
        img:require('./recursos/Cards/waterfall.jpg'),
        name:"Cascada",
        place_detail:"Cascada place_detail",
        category:"sudamerica",
        price:5000,
        stock: '5'
    },
    {
        id:4,
        img:require('./recursos/Cards/sea.jpg'),
        name:"Oceano",
        place_detail:"Oceano place_detail",
        category:"asia",
        price:10000,
        stock: '5'
    },
    {
        id:5,
        img:require('./recursos/Cards/starry-night.jpg'),
        name:"Egipto",
        place_detail:"Egipto place_detail",
        category:"europa",
        price:20000,
        stock: '5'
        
    },
    {
        id:6,
        img:require('./recursos/Cards/london.jpg'),
        name:"London",
        place_detail:"London place_detail",
        category:"europa",
        price:20000,
        stock: '5'
    },
    {
        id:7,
        img:require('./recursos/Cards/london.jpg'),
        name:"London",
        place_detail:"London place_detail",
        category:"europa",
        price:20000,
        stock: '5'
    },

    {
        id:8,
        img:require('./recursos/Cards/london.jpg'),
        name:"Precio: 1000",
        place_detail:"London place_detail London place_detail London place_detail London place_detail London place_detail",
        category:"asia",
        price:20000,
        stock: '5'
    }
]

/*CATEGORIAS*/
const categories = [
    {id: 'sudamerica', description: 'Sudamerica'},
    {id: 'asia', description: 'Asia'},
    {id: 'europa', description: 'Europa'},
    {id: 'norteamerica', description: 'Norteamerica'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}




/*BUSCAR NORMAL/CATEGORIA*/
export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 100)
    })
}



/*BUSCAR POR ID */
export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == id))
        }, 2000)
    })
}
/*TRIPLE =?*/
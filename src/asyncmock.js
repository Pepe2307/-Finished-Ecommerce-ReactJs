const products = [
    {
        id:1,
        img:require('./recursos/Cards/forest.jpg'),
        titulo:"Bosque",
        descripcion:"Bosque descripcion y precio",
        category:"sudamerica",
        price:5000
    },
    {
        id:2,
        img:require('./recursos/Cards/city.jpg'),
        titulo:"Ciudad",
        descripcion:"Ciudad descripcion",
        category:"norteamerica",
        price:10000
    },
    {
        id:3,
        img:require('./recursos/Cards/waterfall.jpg'),
        titulo:"Cascada",
        descripcion:"Cascada descripcion",
        category:"sudamerica",
        price:5000
    },
    {
        id:4,
        img:require('./recursos/Cards/sea.jpg'),
        titulo:"Oceano",
        descripcion:"Oceano descripcion",
        category:"asia",
        price:10000
    },
    {
        id:5,
        img:require('./recursos/Cards/starry-night.jpg'),
        titulo:"Egipto",
        descripcion:"Egipto descripcion",
        category:"europa",
        price:20000
        
    },
    {
        id:6,
        img:require('./recursos/Cards/london.jpg'),
        titulo:"London",
        descripcion:"London descripcion",
        category:"europa",
        price:20000
    },
    {
        id:7,
        img:require('./recursos/Cards/london.jpg'),
        titulo:"London",
        descripcion:"London descripcion",
        category:"europa",
        price:20000
    },

    {
        id:8,
        img:require('./recursos/Cards/london.jpg'),
        titulo:"Precio: 1000",
        descripcion:"London descripcion London descripcion London descripcion London descripcion London descripcion",
        price:20000
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



/*BUSCAR PRODUCOS POR CATEGORIA*/
/* export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
} */
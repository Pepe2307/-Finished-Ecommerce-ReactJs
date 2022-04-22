const products = [
    {
        id:1,
        img:require('./recursos/Cards/forest.jpg'),
        titulo:"Bosque",
        descripcion:"Bosque descripcion y precio",
        categoria:"sudamerica"
    },
    {
        id:2,
        img:require('./recursos/Cards/city.jpg'),
        titulo:"Ciudad",
        descripcion:"Ciudad descripcion",
        categoria:"asia"
    },
    {
        id:3,
        img:require('./recursos/Cards/waterfall.jpg'),
        titulo:"Cascada",
        descripcion:"Cascada descripcion",
        categoria:"sudamerica"
    },
    {
        id:4,
        img:require('./recursos/Cards/sea.jpg'),
        titulo:"Oceano",
        descripcion:"Oceano descripcion",
        categoria:"asia"
    },
    {
        id:5,
        img:require('./recursos/Cards/starry-night.jpg'),
        titulo:"Egipto",
        descripcion:"Egipto descripcion",
        categoria:"europa"
    },
    {
        id:6,
        img:require('./recursos/Cards/london.jpg'),
        titulo:"London",
        descripcion:"London descripcion",
        categoria:"europa"
    },
    {
        id:7,
        img:require('./recursos/Cards/london.jpg'),
        titulo:"London",
        descripcion:"London descripcion",
        categoria:"europa"
    },

    {
        id:8,
        img:require('./recursos/Cards/london.jpg'),
        titulo:"Precio: 1000",
        descripcion:"London descripcion London descripcion London descripcion London descripcion London descripcion"
    }
]

/*BUSCAR PRODUCOS NORMAL Y POR CATEGORIA*/
export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.categoria === categoryId) : products)
        }, 500)
    })
}

/*BUSCAR PRODUCOS PRODUCTOS POR ID */
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
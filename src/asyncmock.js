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
    {
        id:4,
        img:require('./recursos/Cards/sea.jpg'),
        titulo:"Oceano",
        descripcion:"Oceano descripcion"
    },
    {
        id:5,
        img:require('./recursos/Cards/starry-night.jpg'),
        titulo:"Egipto",
        descripcion:"Egipto descripcion"
    },
    {
        id:6,
        img:require('./recursos/Cards/london.jpg'),
        titulo:"London",
        descripcion:"London descripcion"
    },
    {
        id:7,
        img:require('./recursos/Cards/london.jpg'),
        titulo:"London",
        descripcion:"London descripcion"
    },

    {
        id:8,
        img:require('./recursos/Cards/london.jpg'),
        titulo:"Precio: 1000",
        descripcion:"London descripcion London descripcion London descripcion London descripcion London descripcion"
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

/*Desafio clase 7*/
export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == id))
        }, 2000)
    })
}

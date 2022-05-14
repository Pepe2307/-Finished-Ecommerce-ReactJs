const products = [
    {
        id:1,
        img:require('./recursos/Cards/forest.jpg'),
        name:"Bosque Amazonico",
        place_detail:"La selva Amazónica se desarrolla alrededor del río Amazonas y de su cuenca fluvial. Posee una vegetación tupida y exuberante, siempre verde que le otorga el título de el Pulmón del Planeta",
        category:"sudamerica",
        days:"7 Dias",
        price:5000,
        stock: '5'
    },
    {
        id:2,
        img:require('./recursos/Cards/city.jpg'),
        name:"New York",
        place_detail:"Nueva York es la ciudad más poblada del Estado de Nueva York, en los Estados Unidos, y la segunda aglomeración urbana del continente, y es una de las cinco aglomeraciones urbanas más grandes del mundo.",
        category:"norteamerica",
        days:"14 Dias",
        price:10000,
        stock: '5'
    },
    {
        id:3,
        img:require('./recursos/Cards/waterfall.jpg'),
        name:"Cascada Salto del Ángel",
        place_detail:"Salto del Ángel. La cascada es la cascada más alta del mundo con 979 metros de altura y 150 metros de anchura. Se sitúa en las tierras altas de Guayana en el estado de Bolívar, sureste de Venezuela",
        category:"sudamerica",
        days:"7 Dias",
        price:5000,
        stock: '5'
    },
    {
        id:4,
        img:require('./recursos/Cards/sea.jpg'),
        name:"Oceano Atlantico (Lado Americano)",
        place_detail:"Viaje en crucero por El Atlántico, el cual es la parte del océano mundial de la Tierra que separa América (al oeste) de Europa y África (al este)",
        category:"norteamerica",
        days:"14 Dias",
        price:10000,
        stock: '5'
    },
    {
        id:5,
        img:require('./recursos/Cards/starry-night.jpg'),
        name:"Egipto",
        place_detail:"Cuna de la antigua civilización egipcia, la cual fue el origen de la actual cultura occidental, influyendo decisivamente en la historia de la humanidad y dejando maravillas como las pirámides y la gran esfinge,",
        category:"europa",
        days:"7 Dias",
        price:20000,
        stock: '5'
        
    },
    {
        id:6,
        img:require('./recursos/Cards/london2.jpg'),
        name:"London",
        place_detail:"Situada a orillas del río Támesis, hoy en dia es una de las mayores capitales economicas y culturales del mundo y Europa",
        category:"europa",
        days:"14 Dias",
        price:20000,
        stock: '5'
    },
    {
        id:7,
        img:require('./recursos/Cards/japan1.jpg'),
        name:"Templos Japoneses",
        place_detail:"Japon al ser un pais que paso gran parte de su historia aislado al ser una isla desarrollo una cultura muy diferente a la del occidente y se puede notar en sus arquitecturas",
        category:"asia",
        days:"7 Dias",
        price:20000,
        stock: '5'
    },
    {
        id:8,
        img:require('./recursos/Cards/japan3.jpg'),
        name:"Toyko",
        place_detail:"Tokio es el centro administrativo, cultural, financiero, comercial y educativo de Japón y el foco de un extenso complejo urbano que incluye a Kawasaki y Yokohama.",
        category:"asia",
        days:"14 Dias",
        price:20000,
        stock: '5'
    },
    {
        id:9,
        img:require('./recursos/Cards/canada_mountains.jpg'),
        name:"Montañas de Canada",
        place_detail:"Dentro de las Montañas Rocosas canadienses se han establecido cinco parques nacionales, cuatro de ellos entrelazan y forman el Parque Patrimonio de la Humanidad Parque de las Montañas Rocosas Canadienses.",
        category:"norteamerica",
        days:"14 Dias",
        price:20000,
        stock: '5'
    },
    {
        id:10,
        img:require('./recursos/Cards/venice.jpg'),
        name:"Venecia",
        place_detail:"Situada en una laguna pantanosa en el mar Adriático, entre las desembocaduras de los ríos Po y Piave, la ciudad de Venecia está formada por 120 pequeñas islas, comunicadas entre sí por centenares de puentes, ríos y canales, algunos de ellos de gran belleza",
        category:"europa",
        days:"7 Dias",
        price:20000,
        stock: '5'
    },
    {
        id:11,
        img:require('./recursos/Cards/korea.jpg'),
        name:"Corea Del Sur",
        place_detail:"La República de Corea conocida como Corea del Sur, es un país de Asia oriental, ubicada en la parte sur de la península de Corea. Limita al norte con la República Democrática Popular de Corea",
        category:"asia",
        days:"14 Dias",
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
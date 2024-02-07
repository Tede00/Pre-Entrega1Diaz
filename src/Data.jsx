const DATA=[
    {
        "id":1,
        "product":"Lemon Grass",
        "category":1,
        "price":3999,
},

{
        "id":2,
        "product":"Wine - Chateau Bonnet",
        "category":2,
        "price":3999,
    },

{
        "id":3,
        "product":"Wine - Magnotta - Cab Sauv",
        "category":3,
        "price":3999,
    },

{       "id":4,
        "product":"Pepperoni Slices",
        "category":4,
    "price":3999,},

{       "id":5,
        "product":"Pasta - Ravioli",
        "category":5,
        "price":3999,
    },
{       "id":6,
        "product":"Soda",
        "category":6,
        "price":3999,
    }
]

export const pedirDatos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{       
                resolve(DATA)            
        }, 2000)
    })
}


export const pedirDatosDeCategoria = (category) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
                resolve(MOCK_DATA.filter((prod => prod.category === category)))            
        }, 2000)
    })
}

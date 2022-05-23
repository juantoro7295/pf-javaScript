//Filter
//funciones de orden superior 

const product = [
    {id:"1",nombre:"Camisa",precio:1000},
    {id:"2",nombre:"Pantalon",precio:2000},
    {id:"3",nombre:"Zapatos",precio:4000}
]

const menor = (producto) => producto.precio <= 2500;
const productosMenores = product.filter(menor);

console.log(productosMenores);
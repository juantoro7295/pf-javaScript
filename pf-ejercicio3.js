//usar map y principio de unmutabilidad

const product = [
    {id:"1",nombre:"Camisa",precio:1000},
    {id:"2",nombre:"Pantalon",precio:2000},
    {id:"3",nombre:"Zapatos",precio:4000}
]

const newProduct = product.map(function(productos){
    return{
        ...productos,
        precio:productos.precio*0.5
    }
})
console.log(newProduct);

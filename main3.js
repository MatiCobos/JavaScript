let entradasEventoA = "La renga"
let precioEntradasEventoA = 1000
let stockEntradasEventoA = 10

let entradasEventoB = "Divididos"
let precioEntradasEventoB = 3000
let stockEntradasEventoB = 10
let cantidadComprada  //?
let precioTotal = 0


let nombreUsuario = prompt("Hola, bienvenido! \n Ingrese su nombre por favor:")
let cantidadDeLaCompra = parseInt(prompt("Hola " + nombreUsuario + "! indique de cuantos artistas diferentes quiere las entradas, en este sitio vendemos entradas para Divididos y La renga"))
if (cantidadDeLaCompra <= 2){

for(let i = 0; i < cantidadDeLaCompra; i++){

    let nombreCompra = prompt("Ingrese el nombre del artista que quiere comprar")
    if (nombreCompra === entradasEventoA){
        cantidadComprada = parseInt(prompt("Ingrese la cantidad de entradas que quiere"))
        if (cantidadComprada <= stockEntradasEventoA){
        precioTotal += cantidadComprada * precioEntradasEventoA
        alert("Se agrego al carrito " + cantidadComprada + " entradas para ver a " + entradasEventoA + " en el Cosquin Rock 2022")
        stockEntradasEventoA = stockEntradasEventoA - cantidadComprada
        console.log(nombreUsuario + " compró " + cantidadComprada + " entradas de " + entradasEventoA + " quedando un stock final de: " + stockEntradasEventoA);
        }
        else{
            alert("Solo puede comprar hasta 10 entradas")
        }
    }
    else if (nombreCompra === entradasEventoB){
        
        cantidadComprada = parseInt(prompt("Ingrese la cantidad de entradas que quiere"))
        if (cantidadComprada <= stockEntradasEventoB){
        precioTotal += cantidadComprada * precioEntradasEventoB
        alert("Se agrego al carrito " + cantidadComprada + " entradas para ver a " + entradasEventoB + " en el Cosquin Rock 2022")
        stockEntradasEventoB = stockEntradasEventoB - cantidadComprada
        console.log(nombreUsuario + " compró " + cantidadComprada + " entradas de " + entradasEventoB + " quedando un stock final de: " + stockEntradasEventoB)
        }
        else{
            alert("Solo puede comprar hasta 10 entradas")
        }
    }
    else{
        alert("No tenemos entradas para ese artista")
    }

}
}
else{
    alert("Solo tenemos para dos artistas")
}
alert(nombreUsuario + " muchas gracias por tu compra! Su saldo a pagar es: \n" + "$" + precioTotal)

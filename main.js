//Dejo las variables comentadas a modo de referencia, por las dudas.
/*let entradasEventoA = "La renga"
let precioEntradasEventoA = 1000
let stockEntradasEventoA = 10

let entradasEventoB = "Divididos"
let precioEntradasEventoB = 3000
let stockEntradasEventoB = 10*/ 

//Funcion constructora
class Entradas {
    constructor (nombreValor, precioValor, stockValor){
        this.nombre = nombreValor;
        this.precio = precioValor;
        this.stock = stockValor;
    }
}

class Usuarios {
    constructor (nombreUsuario){
        this.nombre = nombreUsuario
    }

}
//Fin funcion contructora

//Objetos creados a partir de la funcion/class constructora
const eventoA = new Entradas ("La renga", 1000, 10)
const eventoB = new Entradas ("Divididos", 3000, 10)
const usuarios = new Usuarios ()
//Fin objetos creados a partir de la funcion/class constructora

//Arrays
const listaEntradas = [eventoA, eventoB]
const listaUsuarios = [usuarios]
//Fin arrays

//Variables
let cantidadComprada = 0
let precioTotal = 0
//Fin variables

//Desafio complementario Arrays
let contador = 0
let listaArtistas = "Hola bienvenido! acá vendemos entradas para estos artistas: "

for(const artista of listaEntradas){
    contador++
    listaArtistas += "\n" + contador + " " + artista.nombre
}
//Fin desafio desafio complementario Arrays

//Funciones
function listaEventos (){
    alert(listaArtistas)/* ("Hola " + nombreUsuario + " acá vendemos entradas de estos artistas:\n" + listaEntradas[0].nombre + "\n" + listaEntradas[1].nombre), comento para despues borrar y volver como estaba pq no me gusta este metodo */
}

function sinStock (artista){
    alert("Solo puede comprar hasta 10 entradas de " + artista)
} 

function conStock(precio, artista, stock){

    precioTotal += cantidadComprada * precio
    alert("Se agrego al carrito " + cantidadComprada + " entradas para ver a " + artista + " en el Cosquin Rock 2022")
    stock -= cantidadComprada
    console.log(nombreUsuario + " compró " + cantidadComprada + " entradas de " + artista + " quedando un stock final de: " + stock);
}

function compra(precio, artista, stock){
    
    cantidadComprada = parseInt(prompt("Ingrese la cantidad de entradas que quiere"))
    if (cantidadComprada <= 10){
        conStock(precio, artista, stock)
    }
    else{
        sinStock(artista)
        compra(precio, artista, stock)
    }
}
//Fin funciones

listaUsuarios.push(new Usuarios(prompt("Hola, bienvenido! \nIngrese su nombre por favor:")))
listaEventos()
let cantidadDeLaCompra = parseInt(prompt("... Ahora pongamos:\n1: Si queres para un artista\n2: Si queres para ambos."))

if (cantidadDeLaCompra <= 2){

    for(let i = 0; i < cantidadDeLaCompra; i++){
        let nombreCompra = prompt("Ingrese el nombre del artista que quiere comprar")
        if ((nombreCompra === listaEntradas[0].nombre) || (nombreCompra === "la renga")){
            compra (listaEntradas[0].precio, listaEntradas[0].nombre, listaEntradas[0].stock)
        }
        else if ((nombreCompra === eventoB.nombre) || (nombreCompra === "divididos")){
            compra (listaEntradas[1].precio, listaEntradas[1].nombre, listaEntradas[1].stock)
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
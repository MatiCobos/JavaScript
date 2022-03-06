class Entradas {
    constructor (nombreValor, precioValor, stockValor, lugarValor, imagenValor){
        this.nombre = nombreValor;
        this.precio = precioValor;
        this.stock = stockValor;
        this.lugar = lugarValor;
        this.img = imagenValor
    }
}

class Usuarios {
    constructor (nombreUsuario){
        this.nombre = nombreUsuario;
    }

}

const eventoA = new Entradas ("La renga", 1000, 10, "La renga 20/02 - Galpón de Hurlingham", "../public/img/entradasEventoUno.jpeg");
const eventoB = new Entradas ("Divididos", 3000, 10, "Divididos 14/05 - Teatro de Flores", "../public/img/entradasEventoDos.png");
const usuarios = new Usuarios ();

const listaEntradas = [eventoA, eventoB];
const listaUsuarios = [usuarios];

let lugarEventoA = document.getElementById("evento1");
lugarEventoA.innerText = eventoA.lugar;

let lugarEventoB = document.getElementById("evento2");
lugarEventoB.innerText = eventoB.lugar;

let valorEventoA = document.getElementById("valor-evento1");
valorEventoA.innerText = `${eventoA.nombre} - Campo $${eventoA.precio}`;

let valorEventoB = document.getElementById("valor-evento2");
valorEventoB.innerText = `${eventoB.nombre} - Campo $${eventoB.precio}`;

/*  let informacionEventoA = document.getElementById("info-evento1");
informacionEventoA.innerHTML = `<div class="eventoUno" id="eventoUnoo">
                                <img src="../public/img/entradasEventoUno.jpeg" class="img-fluid" alt="...">
                                <hr class="hr">
                                <p>${eventoA.nombre}<br>
                                    ${eventoA.lugar}<br> Cantidad a la venta: ${eventoA.stock}
                                </p>
                                <hr class="hr">
                                </div>`;

let informacionEventoB = document.getElementById("info-evento2");
informacionEventoB.innerHTML = `<div class="eventoDos" id="info-evento2">
                                <img src="../public/img/entradasEventoDos.png" class="img-fluid" alt="...">
                                <hr class="hr">
                                <p>${eventoB.nombre}<br>
                                    ${eventoB.lugar} <br> Cantidad a la venta: ${eventoB.stock}
                                </p>
                                <hr class="hr">
                                </div>`;  */
 
for (const prueba of listaEntradas){
    let contenedor = document.getElementById ("prueba")
    
    contenedor.innerHTML = `<div>
                                <img src=${prueba.img} class="img-fluid" alt="...">
                                <hr class="hr">
                                <p>${prueba.nombre}<br>
                                    ${prueba.lugar}<br> Cantidad a la venta: ${prueba.stock}
                                </p>
                                <hr class="hr">
                                </div>`;
    
}


let cantidadComprada = 0;
let precioTotal = 0;

let contador = 0;
let listaArtistas = "Hola bienvenido! acá vendemos entradas para estos artistas: ";

for(const artista of listaEntradas){
    contador++;
    listaArtistas += "\n" + contador + " " + artista.nombre;
}

function listaEventos (){
    alert(listaArtistas);
}

function sinStock (artista){
    alert("Solo puede comprar hasta 10 entradas de " + artista);
} 

function conStock(precio, artista, stock){

    precioTotal += cantidadComprada * precio;
    alert("Se agrego al carrito " + cantidadComprada + " entradas para ver a " + artista + " en el Cosquin Rock 2022");
    stock -= cantidadComprada;
    console.log("compraron " + cantidadComprada + " entradas de " + artista + " quedando un stock final de: " + stock);
}

function compra(precio, artista, stock){
    
    cantidadComprada = parseInt(prompt("Ingrese la cantidad de entradas que quiere"));
    if (cantidadComprada <= 10){
        conStock(precio, artista, stock);
    }
    else{
        sinStock(artista);
        compra(precio, artista, stock);
    }
}

listaUsuarios.push(new Usuarios(prompt("Hola, bienvenido! \nIngrese su nombre por favor:")));
listaEventos();
let cantidadDeLaCompra = parseInt(prompt("Ahora pongamos:\n1: Si queres para un artista\n2: Si queres para ambos."));

if (cantidadDeLaCompra <= 2){

    for(let i = 0; i < cantidadDeLaCompra; i++){
        let nombreCompra = prompt("Ingrese el nombre del artista que quiere comprar");

        let productoBuscado = listaEntradas.find(artista => artista.nombre == nombreCompra);
        console.log(productoBuscado);
        

        if ((nombreCompra === listaEntradas[0].nombre) || (nombreCompra === "la renga")){
            compra (listaEntradas[0].precio, listaEntradas[0].nombre, listaEntradas[0].stock);
        }
        else if ((nombreCompra === eventoB.nombre) || (nombreCompra === "divididos")){
            compra (listaEntradas[1].precio, listaEntradas[1].nombre, listaEntradas[1].stock);
        }
        else{
            alert("No tenemos entradas para ese artista"); 
        }
    }
}
else{
    alert("Solo tenemos para dos artistas");
    
}
alert("Muchas gracias por tu compra! Su saldo a pagar es: \n" + "$" + precioTotal);
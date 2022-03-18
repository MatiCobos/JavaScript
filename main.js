class Entradas {
    constructor (nombreValor, precioValor, stockValor, lugarValor, imagenValor){
        this.nombre = nombreValor;
        this.precio = precioValor;
        this.stock = stockValor;
        this.lugar = lugarValor;
        this.img = imagenValor
    }
}


const eventoA = new Entradas ("La renga", 1000, 10, "La renga 20/02 - Galpón de Hurlingham", "../public/img/entradasEventoUno.jpeg");
const eventoB = new Entradas ("Divididos", 3000, 10, "Divididos 14/05 - Teatro de Flores", "../public/img/entradasEventoDos.png");

const listaEntradas = [eventoA, eventoB];


//DOM
for(const place of listaEntradas){
    let contenedor = document.getElementById("places");
    let lugar = document.createElement("option");

    lugar.innerText = `${place.lugar}`;
    contenedor.append(lugar);
    
}

for(const precio of listaEntradas){
    let contenedor = document.getElementById("precio");
    let valor = document.createElement("option");

    valor.innerText = `${precio.nombre} - Campo $${precio.precio}`;
    contenedor.append(valor);
    
}


for (const entrada of listaEntradas){
    let contenedor = document.getElementById ("cards-container");
    
    let card = document.createElement("div");
     card.innerHTML = `<div class="eventoUno" id="info-evento1">
                            <img src=${entrada.img} class="img-fluid" alt="...">
                            <hr class="hr">
                            <p>${entrada.nombre}<br>
                                ${entrada.lugar}<br>
                                Cantidad a la venta: ${entrada.stock}
                            </p>
                            <hr class="hr">
                        </div>`;  

    contenedor.append(card);
}

//Eventos
function respuestaClick () {

    let optionEvento = document.getElementById("places").value;
    let inputCantidadEntradas = document.getElementById("cantidad-entradas").value;
    let inputEmail = document.getElementById("exampleFormControlInput1").value
    let eventoQueQuiereUsuario = listaEntradas.find(evento => evento.lugar === optionEvento)
    let total = inputCantidadEntradas * eventoQueQuiereUsuario.precio   

    Swal.fire({
    title: 'Gracias por su compra', 
    text: `El total es: $${total}` ,
    icon: 'success',
    footer: `Se envió a: ${inputEmail} el QR para ingresar al show`,
    confirmButtonText: 'Confirmar'
    })

}


let boton = document.getElementById("btn-enviar");
boton.addEventListener("click", respuestaClick);




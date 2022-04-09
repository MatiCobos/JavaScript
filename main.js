class Entradas {
    constructor(nombreValor, precioValor, stockValor, lugarValor, imagenValor) {
        this.nombre = nombreValor;
        this.precio = precioValor;
        this.stock = stockValor;
        this.lugar = lugarValor;
        this.img = imagenValor;
    };
};

const eventoA = new Entradas("V.I.D.A", 1000, 10, "V.I.D.A 20/02 - Galpón de Hurlingham", "../public/img/entradasEventoUno.jpeg");
const eventoB = new Entradas("Destruction", 3000, 10, "Destruction 14/05 - Teatro de Flores", "../public/img/entradasEventoDos.png");

const listaEntradas = [eventoA, eventoB];

//DOM
for (const place of listaEntradas) {
    let contenedor = document.getElementById("places");
    let lugar = document.createElement("option");

    lugar.innerText = `${place.lugar}`;
    contenedor.append(lugar);
}

for (const precio of listaEntradas) {
    let contenedor = document.getElementById("precio");
    let valor = document.createElement("option");

    valor.innerText = `${precio.nombre} - Campo $${precio.precio}`;
    contenedor.append(valor);
}

for (const entrada of listaEntradas) {
    let contenedor = document.getElementById("cards-container");
    let card = document.createElement("div");

    card.innerHTML = `<div class="eventoUno" id="info-evento1">
                            <img src=${entrada.img} class="img-fluid" alt="...">
                            <hr class="hr">
                            <p>${entrada.nombre}<br>
                                ${entrada.lugar}<br>
                            </p>
                            <hr class="hr">
                        </div>`;

    contenedor.append(card);
}

//Eventos
function respuestaClick() {

    let optionEvento = document.getElementById("places").value;
    let eventoQueQuiereUsuario = listaEntradas.find(evento => evento.lugar === optionEvento);
    let inputCantidadEntradas = parseInt(document.getElementById("cantidad-entradas").value);
    if (inputCantidadEntradas <= 3) {
        let inputEmail = document.getElementById("exampleFormControlInput1").value;
        let total = inputCantidadEntradas * eventoQueQuiereUsuario.precio;

        Swal.fire({
            title: 'Gracias por su compra',
            text: `El total es: $${total}`,
            icon: 'success',
            footer: `Se envió a: ${inputEmail} el QR para ingresar al show`,
            confirmButtonText: 'Confirmar',
        });
    }

    else {

        Swal.fire({
            title: 'Lo sentimos',
            text: `Solo puede comprar hasta 3 entradas por persona, vuelva a intentarlo`,
            icon: 'error',
            footer: " ",
            confirmButtonText: 'Confirmar',
        });
    };
};

function stockEntradas() {
    let inputCantidadEntradas = parseInt(document.getElementById("cantidad-entradas").value);

    if (inputCantidadEntradas >= 4) {
        let contenedor = document.getElementById("alert");
        let alert = document.createElement("p");

        alert.innerText = `Disculpe las molestias. Solo se puede hasta 3 entradas por persona.`;
        contenedor.append(alert);
    };
};


let boton = document.getElementById("btn-enviar");
boton.addEventListener("click", respuestaClick);

let inputCantidadEntradas = document.getElementById("cantidad-entradas");
inputCantidadEntradas.addEventListener("change", stockEntradas);

let inputEmail = document.getElementById("exampleFormControlInput1");
inputEmail.addEventListener("change", alertEmail);
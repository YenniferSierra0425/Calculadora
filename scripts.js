
swal("Hello world!", "Este es un subtitulo", "info");

/***
 * innerHtml = div, h, p, buttons
 */
function pintarNumero(numero) {
    //document.getElementById('data').value = numero
    pintarDatos(numero)

}

function pintarOperador(operador) {
    // document.getElementById('data').value = operador
    pintarDatos(` ${operador} `)
}

function pintarDatos(dato) {
    let valorInput = document.getElementById('data')
    // valorInput.value = valorInput.value + "  " + dato
    valorInput.value = ` ${valorInput.value} ${dato} `

}

function limpiar() {
    document.getElementById('data').value = " "

}

/**CONDICIONALES
 * Vvalidar si algo es cierto o no
 */

function mostrarResultado() {
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split(' ')
    console.log(arreglo);



    /**
     *  if(arreglo[1] == "+"){
    let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
    document.getElementById('data').value = suma
} else if (arreglo[1] == "-") {
    let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
    document.getElementById('data').value = resta
} else if (arreglo[1] == "*") {
    let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
    document.getElementById('data').value = multiplicar
} else if (arreglo[1] == "/") {
    let division = parseInt(arreglo[0]) / parseInt(arreglo[2])
    document.getElementById('data').value = division
} else {
    swal('Error', 'No seleccionaste ninguna operación', 'error')

}
}
     */

//let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
//document.getElementById('data').value = suma


switch (arreglo[1]) {
    
    case '+':
        let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
        document.getElementById('data').value = suma
        break;
    case '-':
        let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
        document.getElementById('data').value = resta
        break;

        case '*':
        let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
        document.getElementById('data').value = multiplicar
        break;

        case '/':
        let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
        document.getElementById('data').value = dividir
        break;
    default:
        alert('No es + ni menos')

}

}

function preguntarDia(){
    let dia = prompt("Ingrese el dia")

    switch(dia){
        case "lunes":
        alert ("Ingresate el día lunes")
        break;

        case "martes":
        alert ("Ingresate el día martes")
        break;

        case "miercoles":
        alert ("Ingresate el día miercoles")
        break;

        case "jueves":
        alert ("Ingresate el día jueves")
        break;

        case "viernes":
        alert ("Ingresate el día viernes")
        break;



        

}



}
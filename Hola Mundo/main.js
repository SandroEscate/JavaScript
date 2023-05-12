/*
Tipos de datos:
    string    - Cadena de texto
    number    - Numero
    boolean   - Booleano
    object    - Objeto
    function  - Funciones
    null      - Valor Nulo
    undefined - Valor no definido
*/
// let se puede cambiar el valor, caso contrario con const no se puede.
let nombre = "Sandro"; // string
let valor = 27; // number
let verdad = true; // boolean
const correo = 'ejemplo@gmail.com';

// Ahorrar lineas de código al declarar variables
let telefono, pais, id;
telefono = 123456789;

// Operaciones con variables
let valorUno = 20;
let valorDos = 19;
console.log(valorUno + valorDos)

// JS es dinámico
let miVariable = 'texto';
miVariable = 7;

// Arrays - Arreglos
// Puede guardar múltiples datos
let arreglo = [1, 10, 5, {propiedad: 'valor'}, [1, 2, 3]];

// Objeto - Propiedad: valor
let persona = {
    nombre: 'Juan',
    edad: 30,
    soltero: true,
    correo: 'ejemplo@gmail.com'
};

// Function
function saludar() {
    for (let i = 0; i < 5; i++) {
        console.log('Hola Mundo');
    }
}

saludar();

// Null
// Normalmente la usamos si queremos especificar que un valor sea nulo.
let miVar = null;

// Undefined
// Se usa para indicarnos que un valor no está definido.
let miVar2 = undefined;


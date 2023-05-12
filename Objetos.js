// Creando un objeto.
const persona = {
    nombre: 'Roberto',
    edad: 25,
    correo: 'roberto@hotmail.com',
    // creamos una categoría para agrupar propiedades.
    sucripciones: {
        Netflix: true,
        HBO: true,
        Disney: false
    },
    // creamos arreglo para almacenar varios datos.
    coloresFav: [
        'Negro',
        'Rojo',
        'Blanco'
    ],
    // creamos una función. Esta es llamada método.
    saludar: function(){
        console.log('Hola Mundo!');
    }
};
// Accediendo a datos del objeto.
// Forma #1
console.log(persona.nombre);
// Forma #2
const correo = 'correo';
console.log(persona[correo]);
// Forma #3
console.log(persona.sucripciones.Netflix);

// Agregar propiedades y valores
persona.pais = 'Perú';
console.log(persona);

persona.saludar();
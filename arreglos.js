// Ejemplo general - los arreglos guardan distintos tipos de datos.
const arreglo = ['texto', 450.5, false, {propiedad: 12}, [1, 2, 3]];

// Ejemplo 2 - acceder a valores.
const amigos = ['Elvis', 'Juan', 'Carlos', 'Josue'];
console.log("Este es mi primer amigo:", amigos[0]);

// Agregar valores al arreglo.
amigos[4] = 'Leonardo';
console.log(amigos);

// Modificar valores de un arreglo.
amigos[4] = 'Mario';
console.log(amigos);

//Propiedades de arreglos.
// 1. Conocer cantidad de elementos.
console.log('Tengo: ' + amigos.length + ' amigos.');

// 2. Agregar valores.
amigos.push('Leonardo');
console.log(amigos);
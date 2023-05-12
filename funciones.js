// Forma #1 para definir una función
function saludar() {
    console.log('Hola desde una función');
}
// Llamar a la función
saludar();

// Forma #2 para definir una función
const saludo = function() {
    console.log('Hola desde una variable');
}
saludo();

// Forma #3 para definir una función
const saludando = () => {
    console.log('Hola desde una función de tipo flecha');
};
saludando();
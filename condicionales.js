// Estructura Condicional IF
// if (condition) {
     //Código
// }

// Creamos un objeto
const usuario = {
    edad: 27,
    pais: 'Argentina',
    ticket: true
};
// Ejemplo #1
if (usuario.edad >= 18 && usuario.ticket == true) {
    console.log('Acceso permitido');
} else {
    console.log('Acceso denegado');
}
// Ejemplo #2
if (usuario.edad >= 18 || usuario.ticket == true) {
    console.log('El usuario no es mayor de edad pero tiene un ticket');
} else {
    console.log('El usuario no es mayor de edad o no tiene un ticket');
}
// Anidando condicionales
if (usuario.edad >= 18) {
    if(usuario.ticket){
        console.log('El usuario es mayor de edad y tiene un ticket');
    } else {
        console.log('El usuario es mayor de edad, pero no tiene un ticket')
    }
} else {
    console.log('EL usuario es menor de edad');
}

// Uso de elseif
if (usuario.pais === 'Mexico') {
    console.log('El usuario es de Mexico');
} else if(usuario.pais === 'Argentina') {
    console.log('El usuario es de Argentina');
} else {
    console.log('EL usuario es de otro país');
}

// Estructura Condicional Switch
// Creamos un objeto
const usuario2 = {
    nombre: 'Elvis',
    pais: 'España'
};

switch (usuario2.pais) {
    case 'Mexico':
        console.log('El usuario es Mexicano');
        break;
    case 'España':
        console.log('El usuario es Español');
        break;
    default:
        console.log('El usuario es de otro país');
}
/*
Operadores Aritmeticos:
= Asignación
+ Suma
- Resta
* Multiplicación
/ División
% Modulo
++ Aumento
-- Disminución
*/

let suma = 10 + 10;
let resta = 20 - 10;
let multiplicación = 10 * 2;
let division = 40 / 2;
let modulo = 10 % 3;

// Aumento
let num = 10;
num = num++;

// Aumento 2
let numero = 20;
numero += 5;

/*
Operadores de comparación:
== Igual que
=== Igual en valor y tipo
!= Diferente
!== Diferente valor y tipo
> Mayor que
< Menor que
>= Mayor o igual que
<= Menor o igual que
? Operador ternario
*/

let res1 = 5 == 1; // false
let res2 = 5 === '5'; // false
let res3 = 10 != 5; // true
let res4 = 20 !== '30'; // true
let res5 = 5 > 4; // true
let res6 = 20 < 10; // false
let res7 = 5 > 3 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el segundo';
console.log(res7);

/*
Operadores lógicos:
&& And
|| OR
! NOT
*/

// Ejemplo 1 
const nombre = 'Dam';
const edad = 19;
const entrada = false;
const permitirAcceso = edad >= 18 && entrada == true;

console.log('El acceso es: ' + permitirAcceso);

// Example 2
const name = 'Sam';
const age = 17;
const entry = true;
const permited = true;
const Access = (age >= 18 && entry == true) || (permited == true && entry == true);
console.log('El acceso es: ' + Access);

// Ejemplo 3
let variable = false;
console.log(!variable);
//Ejercicio 1//
/*const numero = parseInt(prompt('Ingresa un número para ver su tabla de multiplicar:'));
if (!isNaN(numero)) {
    console.log(`Tabla de multiplicar del número ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log('Por favor, ingresa un número válido.');
}*/

//Ejercicio 2//
/*let acumulador = 0;
let numero;
do {
    numero = parseInt(prompt('Ingresa un número (ingresa 0 para terminar):'));
    if (!isNaN(numero)) {
        acumulador += numero;
    } else {
        console.log('Por favor, ingresa un número válido.');
    }
} while (numero !== 0);
console.log(`La suma total de los números ingresados es: ${acumulador}`);
*/

//Ejercicio 3//
/*let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let numeroIngresado;
alert("¡Bienvenido al juego de adivinar el número! El número está entre 1 y 100.");
do {
    numeroIngresado = parseInt(prompt("Ingresa un número:"));
    intentos++;
    if (isNaN(numeroIngresado)) {
        alert("Por favor, ingresa un número válido.");
    } else if (numeroIngresado < numeroSecreto) {
        alert("El número ingresado es menor que el número secreto. Intenta nuevamente.");
    } else if (numeroIngresado > numeroSecreto) {
        alert("El número ingresado es mayor que el número secreto. Intenta nuevamente.");
    }
} while (numeroIngresado !== numeroSecreto);
alert(`¡Felicitaciones! Has adivinado el número secreto (${numeroSecreto}) en ${intentos} intentos.`);
console.log(`¡Felicitaciones! Has adivinado el número secreto (${numeroSecreto}) en ${intentos} intentos.`);*/

//Ejercicio 4//
/*function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.floor(numero / 2); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
let numeroIngresado = parseInt(prompt("Ingresa un número para verificar si es primo:"));
if (isNaN(numeroIngresado)) {
    alert("Por favor, ingresa un número válido.");
} else {
    if (esPrimo(numeroIngresado)) {
        alert(`El número ${numeroIngresado} es primo.`);
        console.log(`El número ${numeroIngresado} es primo.`);
    } else {
        alert(`El número ${numeroIngresado} no es primo.`);
        console.log(`El número ${numeroIngresado} no es primo.`);
    }
}
*/
//Ejercicio 5//
/*function mostrarDivisores(numero) {
    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    return divisores;
}
let numeroIngresado = parseInt(prompt("Ingresa un número para encontrar sus divisores:"));
if (isNaN(numeroIngresado) || numeroIngresado <= 0) {
    alert("Por favor, ingresa un número válido mayor que 0.");
} else {
    let divisores = mostrarDivisores(numeroIngresado);
    alert(`Los divisores de ${numeroIngresado} son: ${divisores.join(', ')}`);
    console.log(`Los divisores de ${numeroIngresado} son: ${divisores.join(', ')}`);
}
*/

//Ejercicio 6//
/*let arrayDeElementos = [12, 45, 67, 23, 89, 34, 56, 78, 90, 11];
for (let i = 0; i < arrayDeElementos.length; i++) {
    console.log(`Elemento en la posición ${i}: ${arrayDeElementos[i]}`);
}*/

//Ejercicio 7//
/*let arrayDeNumeros = [12, 45, 67, 23, 89, 34, 56, 78, 90, 11];
for (let i = 0; i < arrayDeNumeros.length; i++) {
    let doble = arrayDeNumeros[i] * 2;
    console.log(`El doble de ${arrayDeNumeros[i]} es ${doble}`);
}*/

//Ejercicio 8//
/*let grupoFamiliar = [
    {
        nombre: "Juan",
        edad: 45,
        parentesco: "Padre",
        profesion: "Ingeniero"
    },
    {
        nombre: "María",
        edad: 42,
        parentesco: "Madre",
        profesion: "Doctora"
    },
    {
        nombre: "Carlos",
        edad: 18,
        parentesco: "Hijo",
        profesion: "Estudiante"
    },
    {
        nombre: "Ana",
        edad: 15,
        parentesco: "Hija",
        profesion: "Estudiante"
    },
    {
        nombre: "Luis",
        edad: 70,
        parentesco: "Abuelo",
        profesion: "Jubilado"
    }
];
for (let i = 0; i < grupoFamiliar.length; i++) {
    let persona = grupoFamiliar[i];
    console.log(`Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.parentesco} y trabajo como ${persona.profesion}.`);
}*/

//Ejercicio 9//
/*let arrayDeNumeros = [12, 45, 67, 23, 89, 34, 56, 78, 90, 11];
for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] % 2 !== 0) {
        console.log(`El número ${arrayDeNumeros[i]} es impar.`);
    }
}*/

//Ejercicio 10//
/*let sumaPares = 0;
let sumaImpares = 0;
function solicitarNumero() {
    let numero = parseInt(prompt("Ingresa un número (ingresa 0 para finalizar):"));
    return numero;
}
let numero = solicitarNumero();
while (numero !== 0) {
    if (numero % 2 === 0) {
        sumaPares += numero; 
    } else {
        sumaImpares += numero;
    }
    numero = solicitarNumero();
}
alert(`La suma de los números pares es: ${sumaPares}`);
alert(`La suma de los números impares es: ${sumaImpares}`);
console.log(`La suma de los números pares es: ${sumaPares}`);
console.log(`La suma de los números impares es: ${sumaImpares}`);*/

//Ejercicio 11//
/*let arrayDeNumeros = [12, 45, 67, 23, 89, 34, 56, 78, 90, 11];
let numeroMasGrande = arrayDeNumeros[0];

for (let i = 1; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] > numeroMasGrande) {
        numeroMasGrande = arrayDeNumeros[i];
    }
}
console.log(`El número más grande del array es: ${numeroMasGrande}`);*/

//Ejercicio 12//
/*let arrayDeNumeros = [12, 45, 67, 23, 89, 34, 56, 78, 90, 11];
let numeroMasChico = arrayDeNumeros[0];

for (let i = 1; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] < numeroMasChico) {
        numeroMasChico = arrayDeNumeros[i];
    }
}

console.log(`El número más chico del array es: ${numeroMasChico}`);*/

//Ejercicio 13//
/*function determinarGanador(jugador1, eleccion1, jugador2, eleccion2) {
    if (eleccion1 === eleccion2) {
        return "Empate";
    } else if (
        (eleccion1 === "piedra" && eleccion2 === "tijeras") ||
        (eleccion1 === "tijeras" && eleccion2 === "papel") ||
        (eleccion1 === "papel" && eleccion2 === "piedra")
    ) {
        return jugador1;
    } else {
        return jugador2;
    }
}

let jugador1 = prompt("Ingresa el nombre del Jugador 1:");
let jugador2 = prompt("Ingresa el nombre del Jugador 2:");

let ganador = "Empate";

while (ganador === "Empate") {
    let eleccion1 = prompt(`${jugador1}, elige piedra, papel o tijeras:`).toLowerCase();
    let eleccion2 = prompt(`${jugador2}, elige piedra, papel o tijeras:`).toLowerCase();

    ganador = determinarGanador(jugador1, eleccion1, jugador2, eleccion2);

    if (ganador === "Empate") {
        alert("Es un empate, jueguen otra vez.");
    } else {
        alert(`El ganador es ${ganador}!`);
    }
}

console.log(`El ganador es ${ganador}!`);*/


//ejercicio 14//
/*let asterisco = "* ";
for (let i = 1; i <= 5; i++) {
    console.log(asterisco);
    asterisco = asterisco + "* ";
}*/

//ejercicio 15//
let asterisco = "* ";
for (let i = 1; i <= 5; i++) {
    console.log(asterisco);
    asterisco = asterisco + "* ";
}
let asterisco2 = "* * * * *";
for (let i = 5; i >= 1; i--) {
    console.log(asterisco2);
    asterisco2= asterisco2.substring(0, asterisco2.length - 2);
}

//ejercicio 16//
let arrayDeNumeros = [23, 5, 78, 34, 67, 12, 89, 45, 90, 11];

for (let i = 0; i < arrayDeNumeros.length; i++) {
    for (let j = 0; j < arrayDeNumeros.length - 1 - i; j++) {
        if (arrayDeNumeros[j] > arrayDeNumeros[j + 1]) {
            let temp = arrayDeNumeros[j];
            arrayDeNumeros[j] = arrayDeNumeros[j + 1];
            arrayDeNumeros[j + 1] = temp;
        }
    }
}

console.log("Array ordenado:", arrayDeNumeros);
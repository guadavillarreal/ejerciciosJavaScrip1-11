/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo:    input: 15 , 3, 9
            Output: El 15 es el número más grande
 */

alert("Ingrese tres números:");
let num1 =  parseInt(prompt("Ingrese el primer número"));
let num2 =  parseInt(prompt("Ingrese el segundo número"));
let num3 =  parseInt(prompt("Ingrese el tercer número"));

if (num1>num2) {
    if (num1>num3) {
        document.write("El "+num1+" es el número más grande")
    } else {
        document.write("El "+num3+" es el número más grande")
    }
} else {
    if (num2>num3) {
        document.write("El "+ num2+" es el número más grande")
    } else {
        document.write("El "+num3+" es el número más grande")
    }
}
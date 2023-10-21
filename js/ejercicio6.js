/*6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo:    input: 15 , 3
            Output: El 15 es el número más grande
 */


alert("Ingrese dos números");
let num1 = parseInt( prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
if(num1>num2){
    document.write(num1);
}else{
    document.write(num2);
}
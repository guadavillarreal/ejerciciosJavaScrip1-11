/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:    input: Hola mundo
            Output: oauo
*/

let frase = prompt("Ingrese una frase");
let cantidad = frase.length;
let contador=0;

console.log(frase); //me muestra la frase
console.log(cantidad); //me dice la cantidad de caracteres

console.log(frase.toLowerCase()); //muestra el CAMBIo de LAS MAYUSCULAS a minusculas, si es que hay
frase = frase.toLowerCase(); //CAMBIA LAS MAYUSCULAS  a minusculas, si es que hay

for (let index = 0; index <= cantidad; index++) {
  if (
    frase.charAt(index) === "a" ||
    frase.charAt(index) === "á" ||
    frase.charAt(index) === "e" ||
    frase.charAt(index) === "é" ||
    frase.charAt(index) === "i" ||
    frase.charAt(index) === "í" ||
    frase.charAt(index) === "o" ||
    frase.charAt(index) === "ó" ||
    frase.charAt(index) === "u" ||
    frase.charAt(index) === "ú"
  ){
    console.log(frase.charAt(index));
    document.write("<p>"+ frase.charAt(index)+"</p>");
    }
    else{
        contador++;
    }
}
if (contador>=cantidad) {
    document.write("La frase ingresada no posee vocales");
}
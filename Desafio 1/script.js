/* // ACTIVIDAD EN CLASE
let edad = parseInt(prompt("Ingresa tu Edad"));
let anioNacimiento = 2022 - edad;

if (edad >= 18) {
    alert("Eres mayor de Edad y naciste en el año: " + anioNacimiento);
} else {
    alert("Eres menor de Edad y naciste en el año: " + anioNacimiento);
}; */


//DESAFIO COMPLEMENTARIO - CREAR UN ALGORITMO UTILIZANDO UN CICLO

// CALCULADORA DE COMPRAS
let cantidadCompras = parseInt(prompt("Ingrese la cantidad de articulos para calcular su total"));
let totalCompra = 0;

for (let index = 1; index <= cantidadCompras; index++) {
    let articulos = parseInt(prompt("Articulo " + index));
    totalCompra = totalCompra + articulos;
};

alert("TOTAL COMPRA: " + totalCompra);


// REPETICION DE TEXTO
let texto = prompt("Ingrese el texto a repetir");
let repeticiones = parseInt(prompt("Cantidad de repeticiones"));

for (let index = 1; index <= repeticiones; index++) {
    console.log(texto);
};
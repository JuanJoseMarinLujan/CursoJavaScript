let calculadorA = prompt("¿Que deseas calcular? 1-Sumar, 2-Restar, 3-Multiplicar, 4-Dividir, 5-Nota Final, 6-Descuento");
let resultado = 0;

let suma = (numA, numB) => numA + numB;
let resta = (numA, numB) => numA - numB;
let multiplicacion = (numA, numB) => numA * numB;
let division = (numA, numB) => numA / numB;

switch (calculadorA) {
    case "1":
        let numeroSumaA = parseInt(prompt("Valor Inicial"));
        let numeroSumaB = parseInt(prompt(`a ${numeroSumaA} sumarle:`));
        alert(`Total: ${suma(numeroSumaA, numeroSumaB)}`);
        break;
    case "2":
        let numeroRestaA = parseInt(prompt("Valor Inicial"));
        let numeroRestaB = parseInt(prompt(`a ${numeroRestaA} restarle:`));
        alert(`Total: ${resta(numeroRestaA, numeroRestaB)}`);
        break;
    case "3":
        let numeroMultiplicacionA = parseInt(prompt("Valor Inicial"));
        let numeroMultiplicacionB = parseInt(prompt(`a ${numeroMultiplicacionA} multiplicarlo por:`));
        alert(`Total: ${multiplicacion(numeroMultiplicacionA, numeroMultiplicacionB)}`);
        break;
    case "4":
        let numeroDivisionA = parseInt(prompt("Valor Inicial"));
        let numeroDivisionB = parseInt(prompt(`a ${numeroDivisionA} dividirlo entre:`));
        alert(`Total: ${division(numeroDivisionA, numeroDivisionB)}`);
        break;
    case "5":
        let cantidadNotas = parseInt(prompt("Cantidad de Notas a Calcular?"));
        const arrayNotas = [];
        const arrayPorcentanjes = [];
        let resultado = 0.0;

        for (let index = 1; index <= cantidadNotas; index++) {
            let nota = parseInt(prompt("Nota " + index));
            let porcentaje = parseInt(prompt("Porcentaje de nota " + index));
            
            arrayNotas.push(nota);
            arrayPorcentanjes.push(porcentaje);
        }
        for (let index = 0; index < arrayNotas.length; index++) {
            let total = arrayNotas[index] * (arrayPorcentanjes[index] / 100);
            resultado = resultado + total;
        }
        alert(resultado);
        break;
    case "6":
        let descuento = parseInt(prompt("Digite el descuento a realizar"));
        let valorParaDescuento = parseInt(prompt("Digite el Valor para aplicar descuento"));

        let valorFinal = valorParaDescuento * (descuento / 100);
        alert(valorFinal);
    default:
        alert("No existe la operacion");
}
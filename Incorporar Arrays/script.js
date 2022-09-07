let calculadorA = prompt("¿Que deseas calcular? 1-Sumar, 2-Restar, 3-Multiplicar, 4-Dividir, 5-Nota Final, 6-Descuento");
let resultado = 0;

switch (calculadorA) {
    case "1":
        let numeroA = parseInt(prompt("Digite numero A"));
        let numeroB = parseInt(prompt("Digite numero B"));
        resultado = numeroA + numeroB;
        alert(resultado);
        break;
    case "2":
        numeroA = parseInt(prompt("Digite numero A"));
        numeroB = parseInt(prompt("Digite numero B"));
        resultado = numeroA - numeroB;
        alert(resultado);
        break;
    case "3":
        numeroA = parseInt(prompt("Digite numero A"));
        numeroB = parseInt(prompt("Digite numero B"));
        resultado = numeroA * numeroB;
        alert(resultado);
        break;
    case "4":
        numeroA = parseInt(prompt("Digite numero A"));
        numeroB = parseInt(prompt("Digite numero B"));
        resultado = numeroA / numeroB;
        alert(resultado);
        break;
    case "5":
        let cantidadNotas = parseInt(prompt("Cantidad de Notas a Calcular?"));
        const arrayNotas = [];
        const arrayPorcentanjes = [];
        let resultado = 0.0;

        for (let index = 1; index <= cantidadNotas; index++) {
            let nota = parseInt(prompt("Digite la nota " + index));
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
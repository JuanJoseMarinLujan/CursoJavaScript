let calculadora = parseInt(prompt("¿Que deseas calcular? 1-Sumar, 2-Restar, 3-Multiplicar, 4-Dividir, 5-Nota Final, 6-Descuento"));

if (calculadora === 1) {
    let numeroA = parseInt(prompt("Digite numero A"));
    let numeroB = parseInt(prompt("Digite numero B"));
    resultado = numeroA + numeroB;
    alert(resultado);
} else if (calculadora === 2) {
    let numeroA = parseInt(prompt("Digite numero A"));
    let numeroB = parseInt(prompt("Digite numero B"));
    resultado = numeroA - numeroB;
    alert(resultado);
} else if (calculadora === 3) {
    let numeroA = parseInt(prompt("Digite numero A"));
    let numeroB = parseInt(prompt("Digite numero B"));
    resultado = numeroA * numeroB;
    alert(resultado);
} else if (calculadora === 4) {
    let numeroA = parseInt(prompt("Digite numero A"));
    let numeroB = parseInt(prompt("Digite numero B"));
    resultado = numeroA / numeroB;
    alert(resultado);
} else if (calculadora === 5) {
    let cantidadNotas = parseInt(prompt("Cantidad de Notas a Calcular?"));
    let notaFinal = 0.0;
    for (let index = 1; index <= cantidadNotas; index++) {
        let nota = parseInt(prompt("Digite la nota " + index));
        let porcentajeNota = parseInt(prompt("Porcentaje de nota " + index));

        notaFinal = notaFinal + (nota * (porcentajeNota / 100));
    }
    alert(notaFinal);
} else if (calculadora === 6) {
    let descuento = parseInt(prompt("Digite el descuento a realizar"));
    let valorParaDescuento = parseInt(prompt("Digite el Valor para aplicar descuento"));

    let valorFinal = valorParaDescuento * (descuento / 100);
    alert(valorFinal);
} else {
    alert("No existe la operacion");
}
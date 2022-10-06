// PANTALLA
const valorArriba = document.getElementById("valor-final");
const valorAbajo = document.getElementById("valor-nuevo");
const valorMemoria = document.getElementById("valor-memoria");
// BOTONES
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
const borrar = document.querySelector(".borrar");
const borrarTodo = document.querySelector(".borrarTodo");

const botonGuardar = document.getElementById("save");
let botonesVariables = document.querySelectorAll(".const");

/* ------------------------------------------------ */
// OPERACIONES
class Operaciones {
  sumar(num1, num2) {
    return num1 + num2;
  }

  restar(num1, num2) {
    return num1 - num2;
  }

  multiplicar(num1, num2) {
    return num1 * num2;
  }

  dividir(num1, num2) {
    return num1 / num2;
  }
}
const operacion = new Operaciones();
/* ------------------------------------------------ */
// PANTALLA
class Pantalla {
  constructor(valorArriba, valorAbajo, valorMemoria) {
    this.pantallaValorArriba = valorArriba;
    this.pantallaValorAbajo = valorAbajo;
    this.pantallaValorMemoria = valorMemoria;
    this.calculadora = new Operaciones();
    this.valorAbajo = "";
    this.valorArriba = "";
    this.valorMemoria = "";
    this.operacion = undefined;
    this.signos = {
      sumar: "+",
      restar: "-",
      multiplicar: "x",
      dividir: "%",
    };
  }

  agregarValores(numero) {
    if (numero === "." && this.valorAbajo.includes(".")) return;
    this.valorAbajo = this.valorAbajo.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.pantallaValorArriba.textContent = `${this.valorArriba} ${
        this.signos[this.operacion] || ""
      }`;
    this.pantallaValorAbajo.textContent = this.valorAbajo;
  }

  borrar() {
    this.valorAbajo = this.valorAbajo.toString().slice(0, -1);
    this.imprimirValores();
  }

  borrarTodo() {
    this.valorAbajo = "";
    this.valorArriba = "";
    this.operacion = undefined;
    this.imprimirValores();
  }

  calcular() {
    const valorMemoria = parseFloat(this.valorArriba);
    const valorActual = parseFloat(this.valorAbajo);

    if (isNaN(valorActual) || isNaN(valorMemoria)) return;
    this.valorAbajo = this.calculadora[this.operacion](
      valorMemoria,
      valorActual
    );
    variables.unshift(this.valorAbajo);
    localStorage.setItem("variables", JSON.stringify(variables));
  }

  resultado(tipo) {
    this.operacion !== "igual" && this.calcular();
    this.operacion = tipo;
    this.valorArriba = this.valorAbajo || this.valorArriba;
    this.valorAbajo = "";
    this.imprimirValores();
  }
}
const pantalla = new Pantalla(valorArriba, valorAbajo, valorMemoria);
/* ------------------------------------------------ */
// ACCIONES BOTONES
botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    pantalla.agregarValores(boton.innerHTML);
  });
});

borrar.addEventListener("click", () => {
  pantalla.borrar();
});

borrarTodo.addEventListener("click", () => {
  pantalla.borrarTodo();
});

botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", () => {
    pantalla.resultado(boton.value);
  });
});

// ACCIONES TECLADO
window.addEventListener("keypress", function (e) {
  if (!isNaN(e.key)) {
    pantalla.agregarValores(e.key);
  }
  if (e.key == "+") {
    pantalla.resultado("sumar");
  }
  if (e.key == "-") {
    pantalla.resultado("restar");
  }
  if (e.key == "*") {
    pantalla.resultado("multiplicar");
  }
  if (e.key == "/") {
    pantalla.resultado("dividir");
  }
  if (e.key == "Enter") {
    pantalla.resultado("igual");
  }
  if (e.key == "c") {
    pantalla.borrarTodo();
  }
});

//ACCIONES SAVE - LOCALSTORAGE
let contenedor = document.querySelector(".storage");
let variables = [];

botonGuardar.addEventListener("click", function newItem() {
  let variable = JSON.parse(localStorage.getItem("variables"));

  Swal.fire({
    title: `Guardar variable = ${variable[0]} ?`,
    showCancelButton: true,
    confirmButtonText: "Guardar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Variable Guardada!", "", "success");
      let template = `<button class="const">${variable[0]}</button>`;
      contenedor.innerHTML += template;
      botonesVariables = document.querySelectorAll(".const");
    }
  });
});

/* botonesVariables.forEach((boton) => {
    boton.addEventListener("click", () => {
      pantalla.agregarValores(boton.innerHTML);
    });
  }); */

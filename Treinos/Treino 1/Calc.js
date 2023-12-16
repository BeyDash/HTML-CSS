console.log("1 - soma");
console.log("2 - subtração");
console.log("3 - multiplicação");
console.log("4 - divisão");
console.log("5 - potência");
console.log("6 - raiz quadrada");

let operacao = prompt("Selecione a operacao: ");

let valor1 = prompt("Digite o primeiro número: ");
let valor2 = prompt("Digite o segundo número: ");

if (operacao == 1) {
    console.log(valor1 + valor2);
} else if (operacao == 2) {
    console.log(valor1 - valor2);
} else if (operacao == 3) {
    console.log(valor1 * valor2);
} else if (operacao == 4) {
    console.log(valor1 / valor2);
} else if (operacao == 5) {
    console.log(valor1 ** valor2);
} else if (operacao == 6) {
    console.log(valor1 ** (1 / 2));
} else {
    console.log("Operação inválida");
}

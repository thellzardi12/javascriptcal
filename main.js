// Declaração das variáveis
let operação = prompt("Informe a operação desejada: ")
let numero1 = Number(prompt("Informe o primeiro número: "))
let numero2 = Number(prompt("Informe o primeiro número: "))

// Verificar a operação matemática selecionada
if (operação == "+") {
    let resultado = numero1 + numero2
    prompt ("O resultado de soma é " + resultado + ".")
}
if (operação == "-") {
    let resultado = numero1 - numero2
    document.write ("O resultado da subtração é " + resultado + ".")
}
if (operação == "*") {
    let resultado = numero1 * numero2
   document.write ("O resultado da multiplicação é " + resultado + ".")
}
if (operação == "/") {
    let resultado = numero1 / numero2
    document.write ("O resultado da divisão é " + resultado + ".")
}
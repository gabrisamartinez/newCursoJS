// console.log(typeof Object)

//FUNÇÃO SEM RETORNO
/*
*FUNÇÃO É UM BLOCO DE CÓDIGO NOMEADO
*/
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,3,4,5)

//FUNÇÃO COM RETORNO
function soma(a, b =0){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma(1))

//EXEMPLOS BASICOS 2
const printSOma = function(a ,b){
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel

const soma2 = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito
const sub = (a,b) => a - b
console.log(sub(2,3))
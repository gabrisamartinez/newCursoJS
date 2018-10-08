/*
* OBJETO VS FUNÇÃO
* Objeto seria o mesmo que nas outras linguagens de programação onde você teria que dar
* um new para chama-lo/ instancia-lo.
* EX.:
*/

console.log(typeof Object) //vai mostrar que é uma função
console.log(typeof new Object) //vai mostrar que é um objeto

//EXEMPLO MAIS ENCORPORADO
const Cliente = function(){} //aqui vai ser uma função vazia mesmo só pra demonstração
console.log(typeof Cliente) // aqui vai ser uma função
console.log(typeof new Cliente) //aqui vai ser um objeto

class Produto{} //Baseado no novo JS 2015
console.log(typeof Produto) //Função
console.log(typeof new Produto) // um objeto
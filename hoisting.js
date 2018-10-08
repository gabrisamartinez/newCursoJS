/*
* Hoisting seria o içamento, ou seja mover a declaração para o topo
* issso acontece com o 'var', como consta no exemplo abaixo
*/

//comente esse código antes de executar o segundo
console.log('a =', a)
var a = 2
console.log('a =', a)

/*
* Quando você monta esse código em outro tipo de linguagem de alto nível (Linguagem de Programação)
* ele daria erro, já no js, especialmente com o var o que acontece com esse código é chamado de
* 'Hoisting'.
* Ali ele faz a mesma coisa que o código em exemplo abaixo:
*/

//não rode esse código sem comentar o de cima
var a //declara uma variavel
console.log('a = ', a) //manda mostrar a variavel que no caso ainda não tem valor
a = 2 // declara o valor da variavel
console.log('a =', a) //manda mostrar a variavel que no caso será 2

/*
* Quando isso é declarado em uma função a ação é a mesma
*/

function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a = ', a)
}

teste() //chamando a função ele vai mostrar o mesmo que nos outros exemplos
console.log('a =', a)// esse console.log, caso os outros códigos sem ser a função estiverem comentados
//vai dar erro porque a variavel a está sendo declarada apenas na function.


//TRABALHANDO HOISTING COM LET

console.log('b =', b)
let b = 2
console.log('b =', b)

/*
* Quando está trabalhando com let, o efeito de içamento não ocorre
* logo, quando rodar esse código, irá dar um erro dizendo que o primeiro log está
* indefinido.
*/

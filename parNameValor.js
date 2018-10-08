/**
 * A idéia do par nome/valor (declaração de um objeto) ele está também quando você declara uma variável
 * EX:
 */
const saudacao = 'opa' //contexto léxico 1
//const - constante
//Saudação - Nome
//'opa' - Valor

/**
 * CONTEXTO LÉXICO:
 * é o contexto/local que a sua variavel foi definida fisicamente no código.
 * Lexico tem a ver com palavra
 * então em resumo seria o local em que a sua variavel(par nome/Valor) foi definida no código
 * OUTRO EX DE CONTEXTO:
 */

 function exec() {
     const saudacao = 'Oiee' //contexto lexico 2
     return saudacao
 }

 console.log(exec())//aqui vai retornar oie
 console.log(saudacao) //aqui vai retornar opa

 /**
  * Porque esses dois são o mesmo nome da variavel e estão retornando palavras diferentes?
  * Ambas estão em contextos diferentes, um estão em um contexto lexico global, ou seja, todos porem chamar ele que ele vai retornar o valor "opa"
  * O outro está em um contexto dentro de uma função, onde só vai retornar dentro da função e para instancia-lo (chama-lo) é necessario instanciar apenas a função.
  * Não gerando um conflito
   */



    // Então só pra fixar na cabeça, objetos são grupos alinhados de pares nome/Valor
    const cliente = {
        nome: 'Pedro',
        idade:32,
        peso:90,
        endereco: {
            lougradoro: 'Rua Muito top',
            numero: 123
        }
    }

    console.log(cliente)
    aaaaaa
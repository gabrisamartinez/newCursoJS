/*
*nessa parte vamos estudar o objeto em js
*de forma literal
*esse assunto, por mais que tenha "objeto"
*não é um arquivo json
*/

/*
*Objeto em js é um coleção de chave e valor, ou seja,
*o nome do atributo como identificador e da um valor á ele
*/

//um par de chaves cria um objeto literal no js
const prod1 = {}
prod1.name = 'Celular Ultra Mega'
prod1.price = 1000.99
prod1['Desconto Legal'] = 40 // eviar atributos com espaço
console.log(prod1)

//OUTRA FORMA DE CRIAR UM OBJETO

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

/*
*mesmo sendo parecido, isso não é um arquivo json:
*aqui tem uma amostra de um arquivo json:
*{"nome": "Camisa Polo", "preco": 79.90}
*essa forma seria um json validado, o que está sendo passado
*nesse conteúdo por enquanto é um objeto literal dentro do js
*/
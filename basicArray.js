const valor = [7.7 , 8.9, 6.3 , 9.2]
console.log(valor[0], valor[3])
console.log(valor[4])

//ADICIONAR UM VALOR A UMA POSIÇÃO
valor[4] = 10
console.log(valor)

//VER O TAMANHO DO ARRAY
valor[10] = 20
console.log(valor)
console.log(valor.length)

//NÃO É UMA BOA PRÁTICA
valor.push({id: 3}, false, null, 'teste')
console.log(valor)

//DELETAR VALORES DO ARRAY
console.log(valor.pop())
delete valor[0]
console.log(valor)

//TIPO DE ARRAY
console.log(typeof valor)
let valor//não foi definida
console.log(valor)


if(valor != null){
    console.log(valor.toString())
}else {
    valor = null
    console.log(valor)// ausencia de valor, ou seja, foi definid    a
}


const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar
console.log(!!produto.preco)
console.log(produto.preco)
delete produto.preco

produto.preco = null
console.log(produto)
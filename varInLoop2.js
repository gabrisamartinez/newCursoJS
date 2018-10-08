const funcs = []

for(var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // aqui seria para valer 2
funcs[8]() //aqui seria para valer 8

/*
* como já dito antes a "função" push ela serve para, nesse exemplo,
* preencher o array (lista), logo em seguida foi feito uma função sem nomeação
* para toda vez que passar pelo for (10x) ele imprime no console a variavel i.
* Se rodar esse codigo (chamando as duas funcs como está ali) ele vai imprimir 10 em ambas,
* porque a variavel ela não contem escopo de bloco, ou seja, não tem escopo de função passando então
* o valor 10 para ambas.
*/

const notFuncs = []

for (let i =0 ; i < 10; i++) {
    notFuncs.push(function() {
        console.log(i)
    })
}

notFuncs[2]() // aqui é pra mostrar 2
notFuncs[8]() //aqui é pra mostrar 8

/*
* Porque let ele passou as variaveis certas?
* O let, a cada vez que ele passa pela repetição ele guarda a variavel
* que foi passado ali na "memoria", guardando sempre um em cada lugar, diferente de var,
* pois o var ele só absorve o ultimo valor colocado independente da posição.
*/

                //variaveis
/*
*var é a palavra reservada
*a = identificador
*/
var a = 3
let b = 4

console.log(a,b)

//diferença entre var e let
/*
*1 das = var você pode,
*dentro de um escopo, definir a identificação dela.
*/

var a = 30 //isso vai rodar // estranhesa do js mas não é recomendado utilizar

/*
*Já o let não é possivel redefinir sua identificação.
*Isso não significa que você não pode redefinir seu valor
*como por exemplo:
*/

b = 40
console.log(a,b) // pode-se ver que na hora de mostrar no console ele mostra "3 40"


            //constante

const c = 5
/*
*c = 50 isso vai dar erro pois uma constante você não pode mais atribuir
*um valor pra ela a não ser o que já está atribuido
*/

console.log(c)
const type1 = 1.0
console.log(type1)

const type2 = Number("2")
console.log(type2)
console.log(type1, type2)
console.log(Number.isSafeInteger(type1))
//ele só passa o ponto inteiro como verdadeiro pois é 1.0
//caso fosse 1.1 já voltaria a ser um ponto flutuante. Isso é mais em js, java por exemplo 1.0 = float e não Integer


const avaliable1 = 9.871
const avaliable2 = 6.871
const total = avaliable1 * type1 + avaliable2 * type2
const media = total / (type1  + type2)
console.log(media.toFixed(1))
console.log(media.toString())
console.log(media.toString(2)) // transforma em valor binario

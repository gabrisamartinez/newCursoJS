let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!isActive)
//RETORNA TRUE
console.log('dão verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //aqui tem conteúdo dentro: espaço;
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))
//RETORNA FALSO
console.log('os que dão falso...')
console.log(!!0)
console.log(!!'')//aqui é uma string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('para finalizar....')
console.log(!!(''|| null || 0 || 'EPA')) //retorna o unico valor verdadeiro
console.log(!!(''|| null || 0 || ' '))//RETORNA VERDADEIRO

//aqui ele retorna Desconhecido pois a string está vazia e será falso
let nome = ''
console.log(nome || 'Desconhecido')

//como a string não retorna vazia, ele vai retornar a string
let name = 'Gabrielly'
console.log(name || 'Desconhecido')


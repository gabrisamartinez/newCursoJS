const escola = "Cod3r"
console.log(escola.charAt(4))//pegar aquele caractere
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))//a partir da unicode em relação ao indice 3

console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //vai do indice 0 até o indice 3 sem incluir o indice 3

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

console.log(escola.replace(3,'e'))
console.log(escola.replace(/\w/g,'e'))//regex

console.log('Ana, Maria, Pedro'.split(',')) //você quebra uma string e constrói um array
console.log('Ana, Maria, Pedro'.split(/,/)) //você quebra a string de uma forma inteligente e gobla e constrói um array por regex



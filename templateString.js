const name = 'Rebeca'
const concatenate = 'Olá ' + name + '!'
//o console considera as quebras de linha
const template = `
    Olá
    ${name}!
`
console.log(template)


//expressões
console.log(`1 + 1 = ${1 + 1}`) //ele interpretou dentro da chaves apenas

/*FUNÇÃO ARROW
*a função up ela transforma a string em letra minuscula colocada
*em letra maiuscula
*/
const up = text => text.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) //aqui ele usa a função




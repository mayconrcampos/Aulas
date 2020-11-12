let num = [9, 8, 4, 3, 2]

num[4] = 5
num.push(6)
num.push(7) //push adiciona itens ao array.

console.log(num)
for(i = 0; i < num.length; i++){
    console.log(num[i])
}
console.log(num.sort()) // sort() ordena o vetor.
console.log(`O vetor possui ${num.length} posições.`)

// Tem um laço mais simples pra percorrer vetores.

for(let posicao in num){
    console.log(`Número: ${num[posicao]} Posição: ${posicao}`)
}

// Buscando valores dentro do vetor - Retorna o indice quando o numero for encontrado, caso contrário retorna -1.
console.log(num.indexOf(5))
console.log(num.indexOf(8))
console.log(num.indexOf(15))


// enchendo um array com numeros
var lista = []
for(i = 0; i <= 20; i++){
    lista.push(i)
}
console.log(lista)

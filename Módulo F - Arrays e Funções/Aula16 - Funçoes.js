// Função parimpar que detecta se o número é par ou impar.

function parimpar(n){
    if(n % 2 == 0){
        console.log(`${n} é PAR!`)
    }else{
        console.log(`${n} é ÍMPAR!`)
    }
}

for(i = 0; i < 20; i++){
    parimpar(i)
}

// Função primo que verifica se o numero é primo.

function primo(n){
    var div = 0
    console.log(`Divisíveis por ${n}:`)
    for(i = 0; i <= n; i++){
        if(n % i == 0){
            console.log(i+" ")
            div++
        }
    }if(div == 2 || div == 0 || div == 1){
        console.log(`${n} é PRIMO.`)
    }else{
        console.log(`${n} não é PRIMO!`)
    }
}

for(let j = 0; j <= 20; j++){
    primo(j)
}

var dobro = function(num) {
    console.log(`Dobro de ${num} é ${num*2}.`)
}
for(i = 0; i <= 10; i++){
    dobro(i)
}


// Fatorial função comum
function fatorial(numero) {
    fat = 1
    for(j = 1; j <= numero; j++){
        fat *= j
    }
    if(numero == 0){
        fat = 1
    }
    return fat
}
console.log(fatorial(6))

// Fatorial função recursiva

function fatorial_recursiva(numero){
    if(numero == 1){
        return 1
    }else{
        return numero * fatorial_recursiva(numero - 1)
    }
}
console.log(fatorial_recursiva(7))

// A sintaxe de JavaScript é simplesmente fabulosa.
// Possui sintaxe raiz, mas com melhorias que a tornaram moderna.
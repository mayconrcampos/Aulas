var array = []
var lista_numeros = window.document.getElementById("numeros")
var todo = window.document.getElementById("todo")
var maior = window.document.getElementById("maior")
var menor = window.document.getElementById("menor")
var soma = window.document.getElementById("soma")
var media = window.document.getElementById("media")

function adicionar(){
    var numero = window.document.getElementById("numero").value

    if(numero && numero > 0 && numero <= 100){
        numero = Number(numero)
        if(array.indexOf(numero) != -1){
            alert("Este número já tem na lista.")
        }else{
            array.push(numero)
            
            var item = document.createElement("option")
            item.text = `Valor ${numero} Adicionado `
            lista_numeros.appendChild(item)
        }
        foco()
          
    }else{
        alert("Favor, insira um número entre 1 a 100.")
    }
}

function foco(){
    numero.focus()
    numero.value = ""
}
    
function finalizar(){
    if(array.length > 0){
        todo.innerHTML = `Ao todo, temos ${totalnumeros(array)} números Cadastrados.`
        maior.innerHTML = `O Maior número da lista é ${maiornumero(array)}.`
        menor.innerHTML = `O Menor número da lista é ${menornumero(array)}.`
        soma.innerHTML = `A soma de todos os números é ${somanumeros(array)}.`
        media.innerHTML = `A média dos valores é ${medianumeros(array).toFixed(2)}.`
    }else{
        alert("Você precisa adicionar números à lista.")
    }
}

function totalnumeros(array){
    return array.length
}

function maiornumero(array){
    var maiornum = 0
    for (var i = 0; i < array.length; i++){
        if (array[i] > maiornum ){
            maiornum = array[i];
        }    
    }
    return maiornum
}

function menornumero(array){
    var menornum = 1000
    for (var i = 0; i < array.length; i++) {
        if (array[i] < menornum ) {
            menornum = array[i];
        }    
    }
    return menornum
}

function somanumeros(array){
    var somar = 0
    for(n in array){
        somar += array[n]
    }
    return somar
}

function medianumeros(array){
    return somanumeros(array) / array.length
}

function limpar() {
    array = []
    lista_numeros.innerHTML = ""
    todo.innerHTML = ""
    maior.innerHTML = ""
    menor.innerHTML = ""
    soma.innerHTML = ""
    media.innerHTML = ""
    foco()
}
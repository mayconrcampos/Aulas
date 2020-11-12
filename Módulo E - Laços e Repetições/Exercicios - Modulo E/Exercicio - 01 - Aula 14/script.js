function contar(){
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var contagem = window.document.getElementById("contagem")
    var frase = window.document.getElementById("frase")
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    contagem.innerHTML = ""


    if(passo > 0){
        frase.innerHTML = `Passo ${passo} selecionado`
        if (fim > inicio){
            for(i = inicio; i <= fim;){
                contagem.innerHTML += ` ${i} &#x1F595`
                i += passo
            }contagem.innerHTML += `&#x1F44D;`
        
        }else if(inicio > fim){
            for(i = inicio; i >= fim;){
                contagem.innerHTML += ` ${i} &#x1F595`
                i -= passo
            }contagem.innerHTML += `&#x1F44D;`

        }
    }else{
        passo = 1
        frase.innerHTML = `Passo 0 Inválido. Foi automaticamente setado para 1.`
        if (fim > inicio){
            for(i = inicio; i <= fim;){
                contagem.innerHTML += ` ${i} &#x1F595`
                i += passo
            }contagem.innerHTML += `&#x1F44D;`
        
        }else if(inicio > fim){
            for(i = inicio; i >= fim;){
                contagem.innerHTML += ` ${i} &#x1F595`
                i -= passo
            }contagem.innerHTML += `&#x1F44D;`

        }
    }
    
}

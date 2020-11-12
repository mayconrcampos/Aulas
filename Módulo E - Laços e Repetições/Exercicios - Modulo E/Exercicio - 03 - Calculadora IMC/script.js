function calcular(){
    var peso = window.document.getElementById("peso").value 
    var altura = window.document.getElementById("altura").value 
    var mostra_resultado = window.document.getElementById("resultado")
    var frase = window.document.getElementById("frase")
    var estado = window.document.getElementById("estado")
    var sec2 = window.document.getElementById("sec2")

    if(peso && altura){
        mostra_resultado.innerHTML = `Você tem ${peso}kg e ${altura} de altura.`
        frase.innerHTML = `Seu IMC é ${resultado(peso, altura)}.`
        if(resultado(peso, altura) < 17){
            estado.innerHTML = `Abaixo de 17 - Muito abaixo do peso.`
            sec2.style.background = "#d99795"
        }else if(resultado(peso, altura) >= 17 && resultado(peso, altura) <= 18.49){
            estado.innerHTML = `Entre 17 e 18,49 - Abaixo do peso.`
            sec2.style.background = "#ffc000"
        }else if(resultado(peso, altura) >= 18.5 && resultado(peso, altura) <= 24.99){
            estado.innerHTML = `Entre 18,50 e 24,99 - Peso Normal.`
            sec2.style.background = "#92d050"
        }else if(resultado(peso, altura) >= 25 && resultado(peso, altura) <= 29.99){
            estado.innerHTML = `Entre 25 e 29,99 - Acima do Peso.`
            sec2.style.background = "#ffc000"
        }else if(resultado(peso, altura) >= 30 && resultado(peso, altura) <= 34.99){
            estado.innerHTML = `Entre 30 e 34,99 - Obesidade I.`
            sec2.style.background = "#d99795"
        }else if(resultado(peso, altura) >= 35 && resultado(peso, altura) <= 39.99){
            estado.innerHTML = `Entre 35 e 39,99 - Obesidade II (Severa).`
            sec2.style.background = "#c00000"
        }else if(resultado(peso, altura) > 40){
            estado.innerHTML = `Maior de 40 - Obesidade III (mórbida).`
            sec2.style.background = "#953735"
        }
    }else{
        alert("Você precisa preencher os campos para Calcular.")
    }
    

}

function resultado(peso, altura){
    var peso = Number(peso)
    var altura = Number(altura)

    var res = peso / (altura * altura)
    return res.toFixed(2)
}
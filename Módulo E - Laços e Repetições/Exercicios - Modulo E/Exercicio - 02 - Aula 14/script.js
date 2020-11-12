function gerar(){
    var titulo1 = window.document.getElementById("titulo1")
    var quadro = window.document.getElementById("quadro")
    var numero = window.document.getElementById("numero")
    numero = Number(numero.value)

    if(numero){
        titulo1.innerHTML = `Tabuada de ${numero}`
        quadro.innerHTML = ""
        for(i = 1; i <= 10; i++){
            quadro.innerHTML += `${numero} x ${i} = ${numero * i}<br>`
        }  

    }else{
        alert("Favor preencha o campo com um número Negativo ou Positivo, diferente de ZERO.")
    }
    
}
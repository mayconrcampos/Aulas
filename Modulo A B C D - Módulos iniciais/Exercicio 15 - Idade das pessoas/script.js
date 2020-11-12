function verificador(){
    var div = window.document.getElementById("frase")
    var radios = window.document.getElementsByName("genero")
    var imagem = window.document.getElementById("imagem")

    var ano_escolha = window.document.getElementById("ano")
    var ano = new Date()
    var anoatual = ano.getFullYear() //2020

    var calcula = anoatual - Number(ano_escolha.value)

    for(i = 0; i < radios.length; i++){
        if(radios[i].checked == true){
            div.innerText = `Foi detectado ${radios[i].value} com ${calcula} anos.`
        }
    }
    if(calcula < 3 && radios[0].checked == true){
        imagem.src = "img/homem_bebe.png"
    }else if(calcula < 3 && radios[1].checked == true){
        imagem.src = "img/mulher_bebe.png"
    }else if(calcula >= 3 && calcula < 10 && radios[0].checked == true){
        imagem.src = "img/homem_menino.png"
    }else if(calcula >= 3 && calcula < 10 && radios[1].checked == true){
        imagem.src = "img/mulher_menina.png"
    }else if(calcula >= 10 && calcula < 18 && radios[0].checked == true){
        imagem.src = "img/homem_adolescente.png"
    }else if(calcula >= 10 && calcula < 18 && radios[1].checked == true){
        imagem.src = "img/mulher_adolescente.png"
    }else if(calcula >= 18 && calcula < 40 && radios[0].checked == true){
        imagem.src = "img/homem_jovem.png"
    }else if(calcula >= 18 && calcula < 40 && radios[1].checked == true){
        imagem.src = "img/mulher_jovem.png"
    }else if(calcula >= 40 && calcula < 65 && radios[0].checked == true){
        imagem.src = "img/homem_coroa.png"
    }else if(calcula >= 40 && calcula < 65 && radios[1].checked == true){
        imagem.src = "img/mulher_coroa.png"
    }else if(calcula >= 65 && calcula <= 120 && radios[0].checked == true){
        imagem.src = "img/homem_velho.png"
    }else if(calcula >= 65 && calcula <= 120 && radios[1].checked == true){
        imagem.src = "img/mulher_velha.png"
    }else{
        imagem.src = 'img/esqueleto.png'
        div.innerText = `O quê, ${calcula} anos? Está morto faz tempo.`
    }
}
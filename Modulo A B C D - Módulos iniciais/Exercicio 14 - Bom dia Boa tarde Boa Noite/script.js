function carregar(){
    var divhora = window.document.getElementById("hora")
    var imagem = window.document.getElementById("imagem")
    var mensagem = window.document.getElementById("mensagem")
    
    var date = new Date()
    var hora = date.getHours()
    var minutos = date.getMinutes()
    divhora.innerText = `Agora são ${hora} horas e ${minutos} minutos.`

    if(hora >= 0 && hora < 12){
        // Bom dia
        imagem.src = "manha.png"
        document.body.style.background = "#fdd675"
        mensagem.innerText = `Bom dia!!`
    }else if(hora >= 12 && hora < 18){
        // boa tarde
        imagem.src = "tarde.png"
        document.body.style.background = "#fd9419"
        mensagem.innerText = "Boa tarde!!"
    }else{
        // boa noite
        imagem.src = "noite.png"
        document.body.style.background = "#081b36"
        mensagem.innerText = "Boa noite!!"
    }
}






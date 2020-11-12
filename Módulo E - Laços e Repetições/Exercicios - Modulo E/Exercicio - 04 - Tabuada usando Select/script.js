function gerar(){
    var numero = window.document.getElementById("numero").value
    var mostra = window.document.getElementById("mostra")
    var select = window.document.getElementById("seltab")

    //mostra.innerHTML = ""
    if(numero){
        select.innerHTML = ""
        for(i = 1; i <= 10; i++){
            var item = document.createElement("option") 
            item.text = `${Number(numero)} x ${i} = ${Number(numero) * i}`
            //item.value = `tab${i}`
            select.appendChild(item)
        }
    }else{
        alert("Favor, inserir número negativo ou positivo. Não existe tabuada de 0.")
    }
}
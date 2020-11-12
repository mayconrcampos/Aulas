var date = new Date()
var hora = date.getHours()

var divhora = window.document.getElementById("hora")

divhora.innerText = `Agora são ${hora} horas.`
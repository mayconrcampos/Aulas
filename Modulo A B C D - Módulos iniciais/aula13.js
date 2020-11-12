/**
 * Mais exercicios de condicionais aninhadas.
 */
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`São exatamente: ${hora} horas e ${minuto} minutos.`)

if((hora > 0)&& hora < 6){
    console.log("É madrugada. Vai dormir")
}else if((hora > 6)&& hora < 12){
    console.log("É de manhã. Bom dia!")
}else if((hora >= 12)&& hora < 18){
    console.log("É de tarde. Boa tarde!")
}else{
    console.log("É noite. Boa noite!")
}
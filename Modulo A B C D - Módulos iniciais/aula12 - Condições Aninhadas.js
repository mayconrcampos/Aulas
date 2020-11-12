/**
 * Condições Aninhadas
 */
var idade = 125

if(idade < 18){
    console.log("Menor de idade.")
}else if((idade >= 18)&& idade < 65){
    console.log("Maior de idade")
}else if((idade > 65)&& idade < 120){
    console.log("Velho.")
}else{
    console.log("Matusalém.")
}
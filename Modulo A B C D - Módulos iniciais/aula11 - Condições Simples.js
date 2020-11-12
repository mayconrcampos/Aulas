/**
 * Condições Simples
 */
var velocidade = 110

if(velocidade < 80){
    console.log(`Você está na velocidade permitida. ${velocidade}km/h.`)
}else if((velocidade >= 80)&& velocidade < 100){
    console.log(`Você está no limite de velocidade. ${velocidade}km/h.`)
}else{
    console.log(`Você está acima do limite de velocidade. ${velocidade}km/h.`)
}
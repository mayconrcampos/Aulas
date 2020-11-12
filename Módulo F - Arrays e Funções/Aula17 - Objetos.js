/**
 * Declarando Objetos em JavaScript.
 */
let amigo = {
    nome:"David",
    est_civil:"casado",
    sexo:"Masculino",
    peso:"Gordo",
    engordar(){
        this.peso += " pra caralho"
    }
}
console.log(`Meu amigo se chama ${amigo.nome}.`)
console.log(`Ele é ${amigo.est_civil}.`)
console.log(`Gênero ${amigo.sexo}, até o momento.`)
console.log(`Peso (kg): ${amigo.peso}`)

console.log(typeof amigo)
console.log(amigo)

amigo.engordar()
console.log(amigo.peso)
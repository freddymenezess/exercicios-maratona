import { askQuestion, prompt } from "../main.js"

const string = (await askQuestion("Digite uma palavra: ")).trim().toLowerCase()

prompt.close()

let countVogais = 0
let countDigitos = 0
const vogais = "aeiou"
const digitos = "0123456789"
const reversedString = string.split("").reverse().join("")

for (let char of string) {
    if (vogais.includes(char)) countVogais++
    if (digitos.includes(char)) countDigitos++
}

console.log(`Número de caracteres: ${string.length}`)
console.log(`Palavra em minúscula: ${string}`)
console.log(`Número de vogais: ${countVogais}`)
console.log(`Número de dígitos: ${countDigitos}`)

string.startsWith("uni") ? 
    console.log("A palavra começa com 'uni'") : null

string.endsWith("rio") ? 
    console.log("A palavra termina com 'rio'") : null


if (string === reversedString) {
    console.log("A palavra é um palíndromo")
}

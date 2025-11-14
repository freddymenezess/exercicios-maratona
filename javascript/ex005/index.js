import { askQuestion, prompt } from '../main.js'

const symbol = await askQuestion("Escreva um símbolo matemático (+, -, * ou /): ")  
const numStrings = await askQuestion("Escreva dois números separados por espaços para operar: ")

prompt.close()

const nums = numStrings.split(" ").map(Number)

function resultado(symbol) {
    switch (symbol) {
    case "+":
        return console.log(`Resultado: ${nums[0] + nums[1]}`)
    
    case "-":
        return console.log(`Resultado: ${nums[0] - nums[1]}`)

    case "*":
        return console.log(`Resultado: ${nums[0] * nums[1]}`)

    case "/":
        return console.log(`Resultado: ${nums[0] / nums[1]}`)

    default:
        return console.log("Símbolo inválido")
    }
}

console.log(resultado(symbol))

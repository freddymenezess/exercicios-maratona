import { askQuestion, prompt } from '../main.js'

const numStrings = await askQuestion("Escreva números sem espaços entre eles: ")

prompt.close()

const nums = numStrings.split("").map(Number).reduce((acc, curr) => acc + curr, 0)

console.log(`A soma dos números é: ${nums}`)

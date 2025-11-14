import { askQuestion, prompt } from '../main.js'

const numStrings = await askQuestion("Escreva três números separados por espaços: ")

prompt.close()

const nums = numStrings.split(" ").map(Number).sort((a, b) => a - b)

console.log(`Maior: ${nums[2]}, Menor: ${nums[0]}, Intermediário: ${nums[1]}.`)

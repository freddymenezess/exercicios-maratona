import { askQuestion, prompt } from "../main.js"

const numStrings = await askQuestion("Escreva três números separados por espaços: ")

prompt.close()

const [A, B, C] = numStrings.split(" ").map(Number)
const media = (A + B + C) / 3

console.log(`A média entre os números ${A}, ${B} e ${C} é ${media}.`)

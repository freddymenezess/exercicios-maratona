import { askQuestion, prompt } from "../main.js"

const numbers = (await askQuestion("Digite dez números separados por espaços: ")).split(" ").map(Number)
const anotherNumber = Number(await askQuestion("Digite mais um número: "))
prompt.close()
numbers.forEach(num => {
    num < anotherNumber ? console.log(`${num} é menor que ${anotherNumber}`) : console.log(`${num} não é menor que ${anotherNumber}`)
})

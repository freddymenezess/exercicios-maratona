import { askQuestion, prompt } from "../main.js"

const array = []
let media = undefined

while (true) {
    let num = Number(await askQuestion("Digite um número: "))

    if (num < 0) {
        prompt.close()
        media = array.reduce((a, b) => a + b, 0) / array.length
        break
    }
    array.push(num)
} 

console.log(`Média dos números digitados: ${media}`)

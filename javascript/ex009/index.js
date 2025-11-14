import { askQuestion, prompt } from "../main.js"

const rand = Math.ceil(Math.random() * 4000) + 1000
const randNum = Math.ceil(Math.random() * 10)
console.log(`Esperando por ${rand} milissegundos...`)

setTimeout(async () => {
    console.log("Agora! " + randNum)
    const start = Date.now()
    const answer = await askQuestion("Digite o número sorteado: ")
    prompt.close()
    const end = Date.now()
    const timeDiff = (end - start) / 1000
    if (parseInt(answer) === randNum) {
        console.log(`Parabéns! Você acertou o número em ${timeDiff.toFixed(2)} segundos.`)
    } else {
        console.log(`Que pena! O número era ${randNum}. Você levou ${timeDiff.toFixed(2)} segundos.`)
    }
}, rand)

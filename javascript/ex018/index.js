import { askQuestion, prompt } from "../main.js"

const tabuada = parseInt(await askQuestion("Montar tabuada de: "))
const start = parseInt(await askQuestion("Iniciar em: "))
const end = parseInt(await askQuestion("Terminar em: "))

prompt.close()

if (start < end) {
    console.log(`Tabuada de ${tabuada} de ${start} até ${end}:`)
    for (let i = start; i <= end; i++) {
        console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    }
} else {
    console.log("Valor inicial deve ser menor ao valor final.")
}

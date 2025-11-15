import { askQuestion, prompt } from "../main.js"

const nomes = (await askQuestion("Escreva nomes separados por espaços: ")).trim().split(/\s+/)

prompt.close()

console.log(`Nomes ordenados alfabeticamente: ${nomes.sort((a, b) => a.localeCompare(b, "pt")).join(", ")}`)

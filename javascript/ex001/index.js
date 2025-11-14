import { askQuestion, prompt } from "../main.js"

const segundosString = await askQuestion("Escreva um tempo em segundos: ")
const segundos = Number(segundosString)

prompt.close()

const horas = Math.floor(segundos / 3600)
const minutos = Math.floor(segundos / 60)

console.log(`Isso equivale a ${horas} horas e a ${minutos} minutos.`)

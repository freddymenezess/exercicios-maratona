import { askQuestion, prompt } from "../main.js"

const numStrings = await askQuestion("Escreva três números separados por espaços: ")

prompt.close()

const [ladoA, ladoB, ladoC] = numStrings.split(" ").map(Number)

if (
    ladoA + ladoB > ladoC && 
    ladoA + ladoC > ladoB && 
    ladoB + ladoC > ladoA
    ) {

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Esses lados formam um triângulo equilátero.")
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Esses lados formam um triângulo isósceles.")
    } else {
        console.log("Esses lados formam um triângulo escaleno.")
    }
        
} else {
    console.log("Esses lados não formam um triângulo.")
}
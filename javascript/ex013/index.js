import { askQuestion, prompt } from "../main.js"

function abreviarNome(nomeCompleto) {
    const naoAbreviar = ["de", "do", "da", "das", "dos"]

    const palavras = nomeCompleto.trim().split(/\s+/)
    const resultado = []

    for (let palavra of palavras) {
        const minuscula = palavra.toLowerCase()

        if (naoAbreviar.includes(minuscula)) {
            resultado.push(minuscula)
        } else {
            resultado.push(palavra[0].toUpperCase() + ".")
        }
    }

    return resultado.join(" ")
}

const nome = await askQuestion("Escreva o seu nome compelto: ")

prompt.close()

console.log("Nome abreviado:", abreviarNome(nome))

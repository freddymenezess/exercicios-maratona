import { askQuestion, prompt } from "../main.js"

const [palavra1, palavra2] = ( await askQuestion("Escreva duas palavras separadas por espaços: ") ).trim().toLowerCase().split(/\s+/)

prompt.close()

if (palavra1 === palavra2) {
    console.log("As palavras são iguais.")
} else {
    palavra1.length > palavra2.length ?
    console.log(`A palavra "${palavra1}" é maior que a palavra "${palavra2}".`) :
    palavra1.length === palavra2.length ?
    console.log("As palavras têm o mesmo tamanho.") :
    console.log(`A palavra "${palavra2}" é maior que a palavra "${palavra1}".`)

    palavra1.includes(palavra2) ?
    console.log(`A palavra "${palavra1}" contém a palavra "${palavra2}".`) :
    console.log(`A palavra "${palavra1}" não contém a palavra "${palavra2}".`)
}

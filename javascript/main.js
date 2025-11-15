import { createInterface } from "readline"

const prompt = createInterface({
    input: process.stdin,
    output: process.stdout
})

function askQuestion(ques) {
    return new Promise(resolve => {
        prompt.question(ques, (answer) => resolve(answer)) 
    })
}

export { askQuestion, prompt }

let A = 80000
let B = 200000
let anos = 0

while (A < B) {
    A += A * 0.03
    B += B * 0.015
    anos++
}

console.log(`Anos necessários: ${anos}`)

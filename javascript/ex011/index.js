function somaDivisores(n) {
    let soma = 1
    let raiz = Math.floor(Math.sqrt(n))

    for (let i = 2; i <= raiz; i++) {
        if (n % i === 0) {
            soma += i
            let outro = n / i
            if (outro !== i) soma += outro
        }
    }

    return soma
}

const limite = 100000

for (let num = 2; num <= limite; num++) {
    let amigo = somaDivisores(num)

    if (amigo > num && amigo <= limite && somaDivisores(amigo) === num) {
        console.log(`Números amigos: ${num} e ${amigo}`)
    }
}

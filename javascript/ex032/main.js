const container = document.getElementById('container')
const processo = document.getElementById('proc')
const cels = document.querySelectorAll('.item')
let total = 0
let soma = 1

function main() {
    for (const cel of cels) {
        cel.innerHTML = `<span>${soma}</span>`
        total += soma
        soma *= 2
    }

    processo.classList.add('oculto')

    setTimeout(() => alert(`O monge recebeu ${total} grãos`), 1000)
}

if (container) container.style.height = container.offsetWidth + 'px'

window.onresize = () => {
    container.style.height = (container.offsetWidth - 200) + 'px'
}

setTimeout(main, 2000)

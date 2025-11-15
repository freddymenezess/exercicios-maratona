const btn = document.getElementById("btn")
const btnReset = document.getElementById("reset")
const res = document.getElementById("mostrarRes")

console.log(btn, btnReset, res)

btn.addEventListener("click", () => res.style.display === "none" ? "block" : null)
btnReset.addEventListener("click", () => res.textContent = "")


const form = document.forms["form"]
const globalBtn = document.getElementById("btn")
const globalBtnReset = document.getElementById("reset")
const globalDivRes = document.querySelector(".res")
const globalRes = document.getElementById("mostrarRes")

function mostrarDiv() {
    const currentStyle = getComputedStyle(globalDivRes).display
    if (currentStyle === "none") {
        globalDivRes.style.display = "block" 
    }
}

if (globalBtnReset) globalBtnReset.addEventListener("click", () => {
    globalRes.textContent = ""
    globalDivRes.style.display = "none"
    form.reset()
})

export default mostrarDiv

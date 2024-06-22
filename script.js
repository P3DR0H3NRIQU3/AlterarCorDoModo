const btnMudarModo = document.querySelector('#alternarModo');

btnMudarModo.addEventListener('click', function alternarModo() {
    let divMudarCor = document.querySelector('.container')
    let style= window.getComputedStyle(divMudarCor)
    let corDiv = style.backgroundColor
    let corTexto = style.color
    if (corDiv === "rgb(255, 255, 255)" && corTexto === "rgb(0, 0, 0)") {
        divMudarCor.style.backgroundColor = "black"
        divMudarCor.style.color = "white"
    } else {
        divMudarCor.style.backgroundColor = "white"
        divMudarCor.style.color = "black"
    }
    var textoDoBotão = this.innerText
    if (textoDoBotão === "MODO DIURNO") {
        this.innerText = "MODO NOTURNO" 
    } else{
        this.innerText = "MODO DIURNO" 
    }
    
})

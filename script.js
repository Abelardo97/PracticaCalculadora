//Declaracion de variables
const  input1= document.getElementById("num1")
const input2 = document.getElementById("num2")
const resultado = document.getElementById("resultado")

const btnSuma = document.getElementById("suma")
const btnResta = document.getElementById("resta")
const btnMulti = document.getElementById("multi")
const btnDivi = document.getElementById("divi")

//
const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multi = (a, b) => a * b
const divi = (a, b) => a / b


const  getSuma = () => {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    resultado.value = suma(num1, num2)
}

const getResta = () => {
    resultado.value = resta(input1.value, input2.value)
}

const getMulti = () => {
    resultado.value = multi(input1.value, input2.value)
}

const getDiv = () => {
    resultado.value = divi(input1.value, input2.value)
}

//Eventos botones
btnSuma.addEventListener("click", getSuma)
btnResta.addEventListener("click", getResta)
btnMulti.addEventListener("click", getMulti)
btnDivi.addEventListener("click", getDiv)



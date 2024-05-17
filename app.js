

const peso = document.querySelector(".input-peso");
const altura = document.querySelector(".input-altura");
const boton = document.getElementById("btn");
const grafico = document.querySelector(".foto");

boton.addEventListener("click", ()=>{

    if (peso.value == "" || altura.value == "") {
        print("Ingrese los datos");
    } else {
        const inputPeso = peso.value;
        const inputAltura = altura.value;

        if (inputPeso <= 0 || inputAltura <= 0) {
            print("datos no validos");
        }
        else {
            const imc = inputPeso / (inputAltura * inputAltura)

            if (imc < 18.5) {
                alert(`Masa corporal:, ${imc}, bajo peso`) 
            } else if (imc >= 18.5 && imc <= 24.9) {
                alert(`Masa corporal:, ${imc}, peso normal`)
            } else if (imc >= 25.0 && imc <= 29.9) {
                alert(`Masa corporal:, ${imc}, sobrepeso`)
            } else if (imc >= 30.0 && imc <= 34.9) {
                alert(`Masa corporal:, ${imc}, obesidad grado 1`)
            } else if (imc >= 35.0 && imc <= 39.9) {
                alert(`Masa corporal:, ${imc}, obesidad grado 2`)
            } else if (imc >= 40.0) {
                alert(`Masa corporal:, ${imc}, obesidad grado 3 🚑`)
            }
        }
        
    }
})


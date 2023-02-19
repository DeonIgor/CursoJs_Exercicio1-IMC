const data = document.querySelector('#formulario');

data.addEventListener('submit', (e) => {
    e.preventDefault();

    const pesoData = e.target.querySelector("#peso");
    const alturaData = e.target.querySelector("#altura");
    let imc = calculaIMC(pesoData.value, alturaData.value);

    let msg = "Campo Inválido"
    let isValid = false;
    if(pesoData.value && alturaData.value) {
        msg = verificaIMC(imc);  
        isValid = true;
    } 

    setResultado(msg, isValid);     
});

calculaIMC = (peso, altura) => {
    return peso / (altura * altura);
}

verificaIMC = (imc) => {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

setResultado = (msg, isValid) => {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    let p = geraParagrafo();
    p.innerHTML = msg;
    p.className = 'p-resultado'
    p.id = isValid ? 'p-valid' : 'p-invalid';

    resultado.appendChild(p);

}

geraParagrafo = () => {
    return document.createElement('p');
}
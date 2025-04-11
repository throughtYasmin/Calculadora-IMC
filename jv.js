const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value); 
    const peso = parseFloat(document.getElementById('peso').value);      
    const resultado = document.getElementById('resultado');

    if (nome !== '' && !isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) { 

        const valorIMC = (peso / (altura * altura)).toFixed(1); 

        let classificação = "";

        if (valorIMC < 18.5) {
            classificação = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificação = 'com peso ideal, parabéns!';
        } else if (valorIMC < 30) {
            classificação = 'levemente acima do peso';
        } else if (valorIMC < 35) {
            classificação = 'com obesidade grau I';
        } else if (valorIMC < 40) {
            classificação = 'com obesidade grau II';
        } else {
            classificação = 'com obesidade grau III, cuidado!';
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificação}`;

    } else {
        resultado.textContent = 'Preencha todos os campos corretamente!';
    }
}

calcular.addEventListener('click', imc);
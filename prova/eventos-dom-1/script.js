// script.js
const conversao = {
    jarda: 1.094,
    pe: 3.281,
    polegada: 39.37,
    milha: 0.000621,
};

const converter = () => {
    const metros = parseFloat(document.getElementById('metros').value);
    const unidade = document.getElementById('unidade').value;
    const resultado = document.getElementById('resultado');

    if (!isNaN(metros) && metros >= 0) {
        const valorConvertido = metros * conversao[unidade];
        resultado.textContent = `${metros} metros é igual a ${valorConvertido} ${unidade}(s).`;
    } else {
        resultado.textContent = 'Por favor, insira um valor válido para metros.';
    }
};

document.getElementById('converter').addEventListener('click', converter);

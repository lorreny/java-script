// script.js
const calcularGorjeta = (total, qualidade, callback) => {
    let percentual;

    switch (qualidade) {
        case 'bom':
            percentual = 0.15; // 15%
            break;
        case 'regular':
            percentual = 0.10; // 10%
            break;
        case 'ruim':
            percentual = 0.05; // 5%
            break;
        default:
            percentual = 0;
    }

    const gorjeta = total * percentual;
    callback(gorjeta);
};

const exibirResultado = (gorjeta) => {
    const resultado = document.getElementById('resultado');
    resultado.textContent = `A gorjeta sugerida é: R$ ${gorjeta.toFixed(2)}`;
};

const botaoCalcular = document.getElementById('calcular');
botaoCalcular.addEventListener('click', () => {
    const total = parseFloat(document.getElementById('total').value);
    const qualidade = document.getElementById('servico').value;

    if (!isNaN(total) && total > 0) {
        calcularGorjeta(total, qualidade, exibirResultado);
    } else {
        alert('Por favor, insira um valor válido para a conta.');
    }
});


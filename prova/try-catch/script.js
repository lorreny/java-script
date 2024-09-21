// script.js
let saldo = 1000; // Saldo inicial

document.getElementById('opcoes').addEventListener('change', function() {
    const operacao = this.value;
    const valorInput = document.getElementById('valor');
    
    if (operacao === 'consultar') {
        valorInput.style.display = 'none'; // Esconder o input para consultar saldo
    } else {
        valorInput.style.display = 'block'; // Mostrar o input para outras operações
    }
});

document.getElementById('realizar').addEventListener('click', function() {
    const operacao = document.getElementById('opcoes').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const resultado = document.getElementById('resultado');

    // Limpar resultados anteriores
    resultado.textContent = '';

    // Verifica se o valor é válido, exceto para consultar saldo
    if ((operacao !== 'consultar' && (isNaN(valor) || valor <= 0))) {
        resultado.textContent = 'Por favor, insira um valor válido.';
        return;
    }

    switch (operacao) {
        case 'consultar':
            resultado.textContent = `Seu saldo é: R$ ${saldo.toFixed(2)}`;
            break;
        case 'sacar':
            if (valor > saldo) {
                resultado.textContent = 'Saldo insuficiente para esta operação.';
            } else {
                saldo -= valor;
                resultado.textContent = `Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`;
                resultado.textContent += ` Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
            }
            break;
        case 'depositar':
            saldo += valor;
            resultado.textContent = `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`;
            resultado.textContent += ` Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
            break;
        default:
            resultado.textContent = 'Selecione uma operação válida.';
            break;
    }
});

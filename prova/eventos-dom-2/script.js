// script.js
document.getElementById('adicionarNota').addEventListener('click', function() {
    const notaInput = document.getElementById('notaInput');
    const notaTexto = notaInput.value.trim();
    const listaNotas = document.getElementById('listaNotas');

    if (notaTexto) {
        const li = document.createElement('li');
        li.textContent = notaTexto;

        const excluirBotao = document.createElement('button');
        excluirBotao.textContent = 'Excluir';
        excluirBotao.addEventListener('click', function() {
            listaNotas.removeChild(li);
        });

        li.appendChild(excluirBotao);
        listaNotas.appendChild(li);

        notaInput.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite uma nota.');
    }
});

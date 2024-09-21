// script.js
const perguntas = [
    {
        pergunta: "Quem foi o primeiro presidente dos EUA?",
        opcoes: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        respostaCorreta: "George Washington"
    },
    {
        pergunta: "Quem é conhecido como o pai da psicanálise?",
        opcoes: ["Carl Jung", "Sigmund Freud", "Alfred Adler", "Ivan Pavlov"],
        respostaCorreta: "Sigmund Freud"
    },
    {
        pergunta: "Qual é o autor de 'Dom Quixote'?",
        opcoes: ["Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges", "Fernando Pessoa"],
        respostaCorreta: "Miguel de Cervantes"
    },
    {
        pergunta: "Quem descobriu a penicilina?",
        opcoes: ["Louis Pasteur", "Alexander Fleming", "Joseph Lister", "Robert Koch"],
        respostaCorreta: "Alexander Fleming"
    }
];

let perguntaAtual = {};

function carregarPergunta() {
    const indice = Math.floor(Math.random() * perguntas.length);
    perguntaAtual = perguntas[indice];

    document.getElementById('pergunta').textContent = perguntaAtual.pergunta;
    const opcoesContainer = document.getElementById('opcoes');
    opcoesContainer.innerHTML = '';
    opcoesContainer.classList.add('opcoes-container'); // Adiciona a classe para o layout

    perguntaAtual.opcoes.forEach(opcao => {
        const button = document.createElement('button');
        button.textContent = opcao;
        button.onclick = () => verificarResposta(opcao);
        opcoesContainer.appendChild(button);
    });

    document.getElementById('feedback').textContent = '';
    document.getElementById('reload').style.display = 'none';
}

function verificarResposta(respostaEscolhida) {
    const feedback = document.getElementById('feedback');
    if (respostaEscolhida === perguntaAtual.respostaCorreta) {
        feedback.textContent = "Acertou!!!";
    } else {
        feedback.textContent = `Errou! A resposta correta é: ${perguntaAtual.respostaCorreta}`;
    }
    document.getElementById('reload').style.display = 'block';
}

document.getElementById('reload').onclick = function() {
    carregarPergunta();
};

carregarPergunta();

// details.js
// URL base para buscar detalhes da receita por ID
const API_URL_DETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

// Função para buscar os detalhes da receita com base no ID
async function buscarDetalhesReceita(id) {
    try {
        if (!id) {
            throw new Error('ID da receita não fornecido.');
        }
        
        const response = await fetch(`${API_URL_DETAILS}${id}`);
        
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        
        const data = await response.json();
        
        if (data.meals && data.meals.length > 0) {
            const receita = data.meals[0];
            
            const tituloReceita = document.getElementById('titulo-receita');
            const imagemReceita = document.getElementById('imagem-receita');
            const instrucoesReceita = document.getElementById('instrucoes-receita');
            const erro = document.getElementById('erro');
            const showMoreBtn = document.getElementById('show-more');

            if (!tituloReceita || !imagemReceita || !instrucoesReceita || !erro || !showMoreBtn) {
                throw new Error('Elementos do DOM não encontrados.');
            }

            tituloReceita.textContent = receita.strMeal;
            imagemReceita.src = receita.strMealThumb;
            instrucoesReceita.textContent = receita.strInstructions;
            erro.textContent = '';

            // Limitar o texto da descrição
            const descricao = receita.strInstructions;
            const maxLength = 200; // número de caracteres a mostrar inicialmente
            if (descricao.length > maxLength) {
                instrucoesReceita.textContent = descricao.substring(0, maxLength) + '...';
                showMoreBtn.classList.remove('hidden');

                showMoreBtn.onclick = () => {
                    if (instrucoesReceita.textContent.endsWith('...')) {
                        instrucoesReceita.textContent = descricao;
                        showMoreBtn.textContent = 'Menos';
                    } else {
                        instrucoesReceita.textContent = descricao.substring(0, maxLength) + '...';
                        showMoreBtn.textContent = 'Mais';
                    }
                };
            } else {
                showMoreBtn.classList.add('hidden');
            }
        } else {
            throw new Error('Receita não encontrada');
        }
    } catch (error) {
        console.error('Erro ao buscar detalhes da receita:', error);
        const erroElemento = document.getElementById('erro');
        if (erroElemento) {
            erroElemento.textContent = 'Erro ao carregar os detalhes da receita. Por favor, tente novamente mais tarde.';
        }
    }
}

// Função para extrair o ID da receita da URL
function obterIdDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Carrega os detalhes da receita ao inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    const idReceita = obterIdDaURL();
    if (idReceita) {
        buscarDetalhesReceita(idReceita);
    } else {
        const erroElemento = document.getElementById('erro');
        if (erroElemento) {
            erroElemento.textContent = 'ID da receita não encontrado na URL.';
        }
    }
});

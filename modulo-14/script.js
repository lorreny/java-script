// URLs base da API do TheMealDB
const API_URL_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const API_URL_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const API_URL_SEARCH_BY_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const API_URL_SEARCH_BY_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

// Seleciona elementos do DOM
const categorySelect = document.getElementById('category-select');
const nameSearch = document.getElementById('name-search');
const recipeContainer = document.getElementById('recipe-container');
const latestRecipeContainer = document.getElementById('latest-recipe-container');
const resultTitle = document.getElementById('result-title');

// Função que busca e popula o select com categorias
async function carregarCategorias() {
    try {
        const response = await fetch(API_URL_CATEGORIES);
        const data = await response.json();
        const categorias = data.categories;

        categorias.forEach(categoria => {
            const option = document.createElement('option');
            option.value = categoria.strCategory;
            option.textContent = categoria.strCategory;
            categorySelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar categorias:', error);
    }
}

// Função que busca receitas por categoria
async function buscarReceitasPorCategoria(categoria) {
    try {
        const response = await fetch(`${API_URL_BY_CATEGORY}${categoria}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Erro ao buscar receitas:', error);
        return [];
    }
}

// Função que busca receitas por nome
async function buscarReceitasPorNome(nome) {
    try {
        const response = await fetch(`${API_URL_SEARCH_BY_NAME}${nome}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Erro ao buscar receitas:', error);
        return [];
    }
}

// Função que busca receitas por letra
async function buscarReceitasPorLetra(letra) {
    try {
        const response = await fetch(`${API_URL_SEARCH_BY_LETTER}${letra}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Erro ao buscar receitas:', error);
        return [];
    }
}

// Função que renderiza receitas na tela
function renderizarReceitas(receitas, container) {
    container.innerHTML = ''; // Limpa os resultados anteriores
    if (receitas && receitas.length > 0) {
        receitas.forEach(receita => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');
            
            recipeElement.innerHTML = `
                <img src="${receita.strMealThumb}" alt="${receita.strMeal}">
                <h2>${receita.strMeal}</h2>
            `;
            
            // Adiciona um evento de clique para cada card de receita
            recipeElement.addEventListener('click', () => {
                // Redireciona o usuário para a página de detalhes com o ID da receita na URL
                window.location.href = `details.html?id=${receita.idMeal}`;
            });
            
            container.appendChild(recipeElement);
        });
    } else {
        container.innerHTML = '<p>Nenhuma receita encontrada.</p>';
    }
}

// Função para ocultar ou mostrar a seção de últimas receitas
function toggleLatestRecipes(shouldShow) {
    console.log('Mostrar últimas receitas:', shouldShow); // Log para depuração
    if (shouldShow) {
        latestRecipeContainer.style.display = 'flex';
    } else {
        latestRecipeContainer.style.display = 'none';
    }
}

// Atualiza o título da seção de resultados com base na pesquisa
function atualizarTituloPesquisa(pesquisa) {
    if (pesquisa) {
        resultTitle.textContent = `Resultado para: "${pesquisa}"`;
    } else {
        resultTitle.textContent = 'Últimas Receitas';
    }
}

// Evento de mudança de categoria
categorySelect.addEventListener('change', async () => {
    const categoria = categorySelect.value;
    if (categoria) {
        toggleLatestRecipes(false); // Oculta as últimas receitas
        atualizarTituloPesquisa(categoria); // Atualiza o título para a categoria selecionada
        const receitas = await buscarReceitasPorCategoria(categoria);
        renderizarReceitas(receitas, recipeContainer);
    }
});

// Evento de entrada no campo de pesquisa
nameSearch.addEventListener('input', async () => {
    const nome = nameSearch.value.trim();
    const letra = nome.charAt(0).toLowerCase(); // Obtém a primeira letra

    console.log('Texto da pesquisa:', nome); // Log para depuração

    if (nome) {
        toggleLatestRecipes(false); // Oculta as últimas receitas
        atualizarTituloPesquisa(nome); // Atualiza o título da pesquisa

        if (nome.length === 1) {
            const receitas = await buscarReceitasPorLetra(letra);
            renderizarReceitas(receitas, recipeContainer);
        } else {
            const receitas = await buscarReceitasPorNome(nome);
            renderizarReceitas(receitas, recipeContainer);
        }
    } else {
        toggleLatestRecipes(true); // Mostra as últimas receitas
        atualizarTituloPesquisa(''); // Reseta o título para "Últimas Receitas"
        recipeContainer.innerHTML = ''; // Limpa as receitas da pesquisa
    }
});

// Função para carregar as últimas receitas
async function carregarUltimasReceitas() {
    try {
        // Aqui você pode definir uma API ou lógica para obter as últimas receitas
        const response = await fetch(`${API_URL_BY_CATEGORY}Beef`); // Exemplo de categoria
        const data = await response.json();
        const receitas = data.meals.slice(0, 12); // Limita a 12 receitas
        renderizarReceitas(receitas, latestRecipeContainer);
    } catch (error) {
        console.error('Erro ao carregar últimas receitas:', error);
    }
}

// Carrega as categorias e últimas receitas ao inicializar a página
carregarCategorias();
carregarUltimasReceitas();

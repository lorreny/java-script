// Para melhor organização recomenda-se criarem arquivos separados para cada exercícios;
// A nomeação padrão dos arquivos é: "Ex01" para o primeiro e assim por diante;

// 1 - Crie um programa que exibe a mensagem "Olá, Bruno!"

// 2 - Crie um programa que exiba a mensagem "Olá, Amanda!"

// 3 - Crie um programa que exiba a mesma mensagem porém com o seu nome.

function nomes(nome){
    return nome
}
result = "Olá,"

console.log(result, 'Bruno')
console.log(result, 'Amanda')
console.log(result, 'Shellen')

function boasVindas(nome) {
    return `Seja bem-vindo ${nome}`;
}

boasVindas('Mariana');  // Aqui o valor do parâmetro nome é a string "Mariana"
boasVindas('Amanda'); // Aqui o valor do parâmetro nome é o número 42

console.log(boasVindas('Mariana')); 
console.log(boasVindas('Amanda')); 

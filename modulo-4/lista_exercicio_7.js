// 7 - Crie um algoritmo que lê uma lista de palavras e inverte as palavras, sem alterar a ordem da lista original. 
// Ex: lista = ['Mariana', 'Luiz', 'João', 'Amanda']
let lista = ['Mariana', 'Luiz', 'João', 'Amanda']

for (let i = 0; i < lista.length; i++){
    console.log(lista[i].split('').reverse().join(''))
}

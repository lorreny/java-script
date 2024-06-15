// 7 - Crie um algoritmo que lê uma lista de palavras e inverte as palavras, sem alterar a ordem da lista original. 
// Ex: lista = ['Mariana', 'Luiz', 'João', 'Amanda']
let lista = ['Mariana', 'Luiz', 'João', 'Amanda']

for (let i = 0; i < lista.length; i++){
    console.log(lista[i].split('').reverse().join(''))
}

//prof
// 7 - Crie um algoritmo que lê uma lista de palavras e inverte as palavras, sem alterar a ordem da lista original. 
// Ex: lista = ['Mariana', 'Luiz', 'João', 'Amanda']
// output esperado: ['Anairam', 'Ziul', 'Oãoj', 'Adnama']

let lista = ['Mariana', 'Luiz', 'João', 'Amanda']

// Sei que vou precisar iterar sobre a lista de nomes.

let nova_lista = []

for (let nome of lista) {
    // escrever o nome ao contrário
    // Strings se comportam como listas.
    let palavra = ''   //Oãoj
    for (let i = nome.length - 1; i >= 0; i-=1) {
        // console.log(nome[i])
        if (palavra === '') {
            palavra = palavra + nome[i].toUpperCase()   //O
        } else {
            palavra = palavra + nome[i].toLowerCase()  //ãoj
        }
    }
    nova_lista.push(palavra)
}

console.log(nova_lista)

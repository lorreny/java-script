// 2 - Crie um algoritmo que lê uma palavra e imprime as letras separadamente e cada letra em caixa alta (maiúscula)
let palavra = 'Abóbora'


for (let i = 0; i < palavra.length; i++){
    console.log(palavra[i].toUpperCase())

}

ou

for (let letra of palavra){
    console.log(palavra[i].toUpperCase())

}

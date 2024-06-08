// 6 - Crie um programa que realiza um filtro na lista abaixo, verificando se a palavra inicia ou termina com o carácter escolhido.
let produtos = ["aveia", "maçã", "uva", "abobora", "leite", "pão", "sabonete", "desodorante", "amaciante", "chuveiro"]

let caracter = 'a'

for (item of produtos){
    if (item[0] === caracter || item[item.length - 1] === caracter){
        console.log(item)
    }
}

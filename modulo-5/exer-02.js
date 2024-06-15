// 2 - Adicone novos valores ao fim da lista. E imprima a lista atualizada no terminal.

let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ian", "Julia"];

//console.log(names)

names.push('Douglas', 'Alana')
console.log('Nomes adicionados ao fim da lista:', names)

for (let i = 0; i < names.length; i += 1) {
  console.log('Valores separados:', names[i])
}


// 3 - Adicione um valor ao início da lista. E imprima a lista atualizada no terminal.

let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ian", "Julia"];

//console.log(names)

names.unshift('Ariane', 'Laila')
console.log('Nomes adicionados ao inicio da lista', names)

for (let i = 0; i < names.length; i += 1) {
  console.log('Valores separados: ', names[i])
}


// 5 - Remova um valor do início da lista declarada; E imprima a lista atualizada.

let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ian", "Julia"];

names.splice(0, 1)
console.log('Primeiro indice removido', names)


for (let i = 0; i < names.length; i += 1) {
  console.log('Valores separados: ', names[i])
}


// 4 -  Remova o último valor da lista declarada; E imprima a lista atualizada no terminal.

let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ian", "Julia"];

//console.log(names)

names.pop()
console.log('O último nome foi removido: ', names)

for (let i = 0; i < names.length; i += 1) {
  console.log('Valores separados: ', names[i])
}


let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ian", "Julia"];
//o metodo push adiciona um valor ao final da lista
names.push('Douglas')
console.log('Método push', names)
//adiciona o valor no inicio
names.unshift('Lucas')
console.log('Método unshift', names)

//o metodo remove o ultimo elemento
names.pop()
console.log('remove', names)

//1 - localiza o primeiro indice remove o que esta no primeiro indice, substitui os valores na lista
//o segundo parametro quantos valores serão removidos, e os valores a serem adiciona
names.splice(1, 1, 'Pedro', 'lala')
console.log('as', names)

names.splice(1, 'Pedro', 'lala')
console.log('sem primeiro parametro da errado', names)

names.splice(0, 0, 'Pedro', 'lala')
console.log('os dois parametros com 0', names)

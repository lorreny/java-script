//Iteração sobre listas e contador resumido em ++
let minha_lista = [ 'Abóbora', 'Morango', 'Uva']

for (let i = 0; i < minha_lista.length; i++){
    console.log(minha_lista[i])
}

for (let indice in minha_lista){
    console.log(indice)
}

for (let alimento of minha_lista){
    console.log(alimento)
}

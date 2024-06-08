// 4 - Observe as seguintes listas: 
let nomes = ['Bruna', 'Gabriel', 'Marcos', 'Jéssica', 'Fernando']
let sobrenomes = ['Oliveira', 'Santos', 'Marques', 'Castro', 'Silva']

//Crie um algirtmo que combine o valor do nome com o sobrenome formando o nome completo.
// O programa deve iterar sobre as listas fornecidas e juntar os valores correspondentes.
for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i], sobrenomes[i])
}


// 4 - Observe as seguintes listas:
/* 
let nomes = ['Bruna', 'Gabriel', 'Marcos', 'Jéssica', 'Fernando']
let sobrenomes = ['Oliveira', 'Santos', 'Marques', 'Castro']

//Crie um algirtmo que combine o valor do nome com o sobrenome formando o nome completo.
// O programa deve iterar sobre as listas fornecidas e juntar os valores correspondentes.
/*for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i], sobrenomes[i])
}*/

/*
for (let i = 0; i < nomes.length; i++){
    for (let i = 0; i < sobrenomes.length; i++){
    }
    console.log(nomes[i], sobrenomes[i])

}*/

const nomes = ['Bruna', 'Gabriel', 'Marcos', 'Jéssica', 'Fernando']
const sobrenomes = ['Oliveira', 'Santos', 'Marques']
const tamanhoMinimo = Math.min(nomes.length, sobrenomes.length)
const listaNomesCompletos = []
for(let i = 0; i < tamanhoMinimo; i++){
    const nome = nomes[i].trim()
    const sobrenome = sobrenomes[i].trim()
    listaNomesCompletos.push(nome + ' ' + sobrenome)
}

let itensRestantes = []
if (nomes.length > tamanhoMinimo){
    itensRestantes.push(...nomes.slice(tamanhoMinimo))
}
if (sobrenomes.length > tamanhoMinimo){
    itensRestantes.push(...sobrenomes.slice(tamanhoMinimo))
}
console.log(listaNomesCompletos)
console.log(itensRestantes)

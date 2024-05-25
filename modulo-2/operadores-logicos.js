//Exemplos de comparação:

// let nome = 'Thiago'

// //Semelhante (possui mesmo valor mas não necessariamente o mesmo tipo)
// console.log(5 == 5) //true
// console.log(5 == '5') //true  

// //Estritamente igual
// console.log(5 === 5) //true 
// console.log(5 === '5') //true 

// //Operação >, >=, <, <=

// console.log(5 > 6) //fase
// console.log(18 >= 18) // true

// console.log(7 < 7) // false
// console.log(9 <= 12) //


console.log(5 > 5)
console.log(18 >= 18)
console.log(7 < 8)
console.log(18 <= 18)

//Operadores lógico E, OU e NOT
//E as duas condições devem ser verdadeiras

//Operador E
console.log(false && false)
let idade = 18
let dinheiro = 100
//dinheiro > 200, idade >= 200
console.log(dinheiro > 200 && idade >= 18)
console.log(false && true)
console.log(true && false)
console.log(dinheiro > 50 && idade >= 18)

//Operador OU
let milhas = 1000
let contaNoBanco = true

console.log(milhas > 1000 || contaNoBanco > 1000)
console.log(false || false)
console.log(false || true)
console.log(true || false)
console.log(true || true)

//operador and - negação
let email = '' //falsy, string vazia não te valor mesmo
//truthy
console.log (!email) //aqui já esta negando que não tem nada

let email2 = ''
if(!email){
    console.log('Mano, cê esqueceu de escrever seu email!')
}else{
    console.log("Digite seu email")
}

//https://dontpad.com//dfs7072505

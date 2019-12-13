/**
 * Funciones constructoras
 */

var newArray = [
  ['jorge','perez',25],
  ['juan','torres',24],
  ['daniel','guzman',23],
]

function Student(firstName,lastName,age){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const arrayMaped = (arr) => arr.map((cValue) => new Student(cValue[0], cValue[1], cValue[2]))
console.log(arrayMaped(newArray))


/**
 * destructuring
 */




/**
 * Challenge 1: Cree una funcion que tome 2 numeros por argumentos (num,length) y devuelva
 * una matriz de multiplos de num hasta length
 * @param {*} mul 
 * @param {*} len 
 */

const arrayMultiple = (mul,len) => {
  var newArr = []
  for(var count = 1; count <= len; count++){
    newArr.push(mul*count)
  }
  return newArr
}

console.log(arrayMultiple(17,6))
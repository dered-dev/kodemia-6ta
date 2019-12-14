/**
 * Example: constructor function
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} age 
 * @return {array}
 */

var newArray = [
  ['jorge', 'perez', 25],
  ['juan', 'torres', 24],
  ['daniel', 'guzman', 23],
]

function Student(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const arrayMaped = (arr) => arr.map((cValue) => new Student(cValue[0], cValue[1], cValue[2]))
console.log(arrayMaped(newArray))


/**
 * Object Destructuring
 */

const student = {
  firstname: 'Jorge Luis',
  lastname: 'Camarillo',
  country: 'México'
};
const { firstname, lastname, country } = student;
console.log(firstname, lastname, country); // Jorge Luis Camarillo México


/**
 * Challenge 1: Cree una funcion que tome 2 numeros por argumentos (num,length) y devuelva
 * una matriz de multiplos de num hasta length
 * @param {number} mul
 * @param {number} len 
 * @return {array}
 */

const arrayMultiple = (mul, len) => {
  let newArr = []
  for (let count = 1; count <= len; count++) {
    newArr.push(mul * count)
  }
  return newArr
}

console.log(arrayMultiple(17, 6))

/**
 * Challenge 2: escriba una funcion, que convierta un objeto en una matriz,
 * donde cada elemento representa un par clave valor
 * @param {Object} obj
 * @return {array}
 */

const objectToArray = obj => {
  let newArr = [];
  for (let key in obj) {
    newArr.push([key,obj[key]])
  }
  return newArr
}

var objToConvert = { a: 1, b: 2 };
console.log(objectToArray(objToConvert))
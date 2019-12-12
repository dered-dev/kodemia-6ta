/**
 * Exercise 1: Dado un array de string
 * Retornar un string que contenga un array que contenga todas las iniciales
 */

var wordsArray = ['hola','perro','Alan','oso','Arbol']

// solution with .map()
const singleWordMap = arr => arr.map(word => word.charAt(0)).join('')
console.log(singleWordMap(wordsArray))

// solution with .map()
const singleWordReduce = arrToReduce => arrToReduce.reduce((accumulate ,current) => accumulate + current.charAt(0),'')
console.log(singleWordReduce(wordsArray))


/**
 * Objects
 */

var dog = {
    name : "algo",
    edad : 10,
    weight: {
        unit: 'kg',
        ammount: 10
    }
}
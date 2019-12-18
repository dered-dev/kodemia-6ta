/**
 * Exercise 1:
 *  Dado un frase, Capitalizar toda la frase
 *  'hOlA A todOs' => 'Hola A Todos'
 */

function capitalizePhrase(phrase){
    var arrToCapitalize = phrase.toLowerCase().split(' ');
    var arrCapitalized  = []
    for(var count = 0; count < arrToCapitalize.length; count++){
        var word = arrToCapitalize[count];
        arrCapitalized[count] = `${word[0].toUpperCase()}${word.slice(1)}`
    }
    return arrCapitalized.join(' ');
}
var phraseToCapitalize = 'hOlA A todOs'
console.log(capitalizePhrase(phraseToCapitalize))



/**
 * Exercise 2:
 *  Dado un array múltiple, contar la cantidad de 1 en el array
 *  [[1,2,0], ['a',3,0], [1,0,1]]; => output: 3
 */

function countNumber(arrMultiple,num) {
  let accNumber = 0;
  for(let count = 0;count < arrMultiple.length; count++){
    for(let countItem = 0; countItem < arrMultiple[count].length; countItem++){
      if(arrMultiple[count][countItem] === num){
        accNumber++
      }
    }
  }
  return accNumber
}
countNumber([[1,2,0], ['a',3,0], [1,0,1]], 1)



/**
 * Exercise 3:
 * Dada un frase, determinar cual es la palabra mas larga en ella
 */
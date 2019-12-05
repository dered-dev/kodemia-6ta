// Arrays
var stringNumbers = [1, 2, 3, 4, 5];

/*
While Loop
*/

/* Print array 1-5 */
var lengthStringNumbers = stringNumbers.length
var indexArray = 0;
var indexArrayReverse = stringNumbers.length - 1;
while (indexArray <= lengthStringNumbers - 1) {
    console.log(stringNumbers[indexArray])
    indexArray++
}

/* Print array reverse 5-1 */
while (indexArrayReverse >= 0) {
    console.log(stringNumbers[indexArrayReverse])
    indexArrayReverse--
}

/* Print array 10,1,9,2,8,3,7,4,6,5 */
var stringNumbersArray = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]];
indexArray = 0;
indexArrayReverse = stringNumbersArray[stringNumbersArray.length - 1].length - 1;
while (indexArray <= stringNumbersArray.length - 2) {
    console.log(stringNumbers[indexArray], stringNumbersArray[5][indexArrayReverse])
    indexArray++
    indexArrayReverse--
}

/*
do while Loop
*/

var numbersDo = [1, 2, 3, 4, 5]
var countDo = 0
do {
    console.log(numbersDo[countDo])
    countDo++
} while (countDo < numbersDo.length)

/*
For loop
*/

var numbersForLoop = [1, 2, 3, 4, 3, 'perrrrro']
// Normal
for (var count = 0; count < numbersForLoop.length; count++) {
    console.log(numbersForLoop[count])
}
// Reverse
for (var count = numbersForLoop.length - 1; count >= 0; count--) {
    console.log(`Elemento ${numbersForLoop[count]} contador -> ${count}`)
}

/*
Exercise 1: 
Vowels count
*/

/* Vowels count only for */
var wordCompareFor = "perrote"
var vowelsFor = 'aeiou';
var lowercasedFor = wordCompareFor.toLowerCase();
var counterVowelFor = 0;
for (var i = 0; i < lowercasedFor.length; i++) {
    for (var j = 0; j < vowelsFor.length; j++) {
        if (lowercasedFor[i] === vowelsFor[j]) {
            counterVowelFor++
        }
    }
}
if(counterVowelFor > 2){
    console.log('tiene al menos 3 vocales')
}

/* Vowels count indexOf for */
var wordCompare = "abcdefghi"
var vowels = 'aeiou';
var counterVowel = 0;
for (var index = 0; index < wordCompare.length; index++) {
    if (vowels.indexOf(wordCompare[index]) > -1) {
        counterVowel++;
    }
}
if(counterVowel > 2){
    console.log('tiene al menos 3 vocales')
}

/*
Exercise 2
Verificar si son múltiplos de 8 los números contenidos en un rangoA y rangob
Verificar que rangoA > rangoB
Verificar que ambos sean positivos
*/
var rangeStart = 10;
var rangeEnd = 24;
var countMultiplos = 0;
if(rangeStart > 0 && rangeStart <=  rangeEnd){
    for(var initial = rangeStart; initial <= rangeEnd;initial++){
        if(initial%8 === 0){
            countMultiplos++
        }
    }
}
console.log(countMultiplos)

/*
Exercise 3
Emulate property length 
*/
var wordLength = "more words";
var sizeLength = 0;
var indexLength = 0;
while (wordLength[indexLength] !== undefined) {
    indexLength += 1;
    sizeLength  += 1;
}
console.log(`string length: ${sizeLength}`)


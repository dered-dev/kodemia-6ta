/**
 * Array Methods
 */

/**
 * .map()
 * retorna un array computado
 */

var numbers = [
    [1, 2, 4],
    [1, 2, 8],
    [1, 9, 3]
]

// function
var newNumbers = numbers.map(function (element, index, array) {
    return element ** 2
})
// arrow function
numbers.map(number => {
    return number ** 2
})

/**
 * suma acumulativa de todos los elementos de un array
 */

// function
var sumMatriz = numbers.map(function (element) {
    var accumulate = 0;
    for (var count = 0; count < element.length; count++) {
        accumulate += element[count]
    }
    return accumulate
})
// arrow function
var sumMatriz = numbers.map(element => {
    var accumulate = 0;
    for (var count = 0; count < element.length; count++) {
        accumulate += element[count]
    }
    return accumulate
})

console.log(sumMatriz)

/**
 * .filter()
 * retorna un array filtrado
 */

// return only even numbers
var numbersFilter = [1, 2, 4, 7, 8]
resultFilter = arr => {
    var filterArr = numbersFilter.filter(function (number, index, arr) {
        return number % 2 === 0
    })
    return filterArr
}
console.log(resultFilter(numbersFilter))


/**
 * Exercise 1: Dado un {array}, devolver los elementos que empiecen con a - A
 */

var arrayString = ['pedro', 'argon', 'Alma', 'Agustin'];
filterArrayString = arr => {
    var filterArr = arr.filter(function (str) {
        if (str.charAt(0) === 'A' || str.charAt(0) === 'a') {
            return str
        }
    })
    return filterArr
}
console.log(filterArrayString(arrayString))


/**
 * Exercise 2: Verificar que todos los elementos en mi {array} son pares positivos
 */

var numbersEven = [4, 4, 8, 9];
numbersEvenFn = arr => {
    let numbersEvenResponse = true
    arr.filter(function (numberEven) {
        if (numberEven <= 0 || numberEven % 2 !== 0) {
            numbersEvenResponse = false
        }
    })
    return numbersEvenResponse
}
console.log(numbersEvenFn(numbersEven))


/**
 * Exercise 3: Retornar el total de cada uno de los elementos del {array} al cuadrado
 */

var squareNumbersArray = [4, 4, 8, 16, 17];
squareNumbers = arr => {
    var newArr = []
    arr.filter(number => {
        newArr.push(number ** 2)
    })
    return newArr;
}
console.log(squareNumbers(squareNumbersArray))


/**
 * Exercise 4: Sacar el factorial de un numero
 */

getFactorial = number => {
    let total = 1;
    for (let count = 1; count <= number; count++) {
        total *= count;
    }
    return total;
}
console.log(getFactorial(10))


/**
 * Exercise 5: Hacer el algoritmo de cifrado cesar encrypt, decrypt
 */
// 
// 
// key  = 1
// hola = ipmb

var caesarShift = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 27);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;


};
const caesar = (text, shift) => {
    return String.fromCharCode(
      ...text.split('').map(char => ((char.charCodeAt() - 97 + shift) % 26) + 97),
    );
  };
console.log(caesar('hola',29))



// Exercise 6: Dada una matriz, encontrar el total de




var numbersReduce = [
    [1, 2, 4],
    [1, 2, 8],
    [1, 9, 3]
]
// reduce array
const numbersReduceResult = arr => {
    return arr.reduce((acc,cValue) => {
        // console.log(cValue)
        return acc + cValue.reduce((acc2,cValue2) => {
            // console.log(acc2 + cValue2)
            return acc2 + cValue2
        }, 0)
    }, 0)
}

console.log(numbersReduceResult(numbersReduce))
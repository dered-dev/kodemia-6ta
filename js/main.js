// Singular word
var pluralWord = 'perros';
var singularWord = pluralWord[0] + pluralWord[1] + pluralWord[2] + pluralWord[3] + pluralWord[4];
console.log(singularWord)


// compare number
var numberCompare = 11;
if((numberCompare >= 0 && numberCompare <= 100) && (numberCompare%10) === 0 ) {
     console.log('Esta dentro del rango 0 y 100 y es múltiplo de 10')
}else if(numberCompare%10 === 0){
    console.warn('Solo es multiplo de 10');
}else if(numberCompare>=0 && (numberCompare%10) !== 0){
    console.warn('Es positivo pero no es multiplo de 10');
}else{
    console.error('No se encuentra en el rango de 0 y 100 y no es múltiplo de 10')
}

// TEMPLATE LITERALS string interpolation
console.log(`El resultado de 1 + 10 es: ${1+10} y otra suma ${1+1}`)

// STRING methods
var str = "perro"
console.log(str.length)
console.log(str.charAt(position))
console.log(str.concat(str1,str2))
console.log(str.includes('str1',position))
console.log(str.slice(7, 13));

// Exercise
// Determinar si la longitud de la palabra ingresa es par
// Verificar que esa palabra tenga una longitud entre 0 y 10
// Verificar que esa palabra tenga una longitud entre 10 y 15

var strCompare  = "perro"
if(strCompare.length % 2 === 0){
    console.log('El numero es par')
    if(strCompare.length >= 0){
        if(strCompare.length <= 10){
            console.log('El numero es mayor que 0 y menor que 10')
        }else if(strCompare.length <= 15){
            console.log('El numero es mayor o igual a 11 y menor que 15')
        }else{
            console.log('El numero es mayor que 15')
        }
    }
}else{
    console.warn('No es un numero par')
}





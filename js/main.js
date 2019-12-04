// Singular word
var pluralWord = 'perros';
var singularWord = pluralWord[0] + pluralWord[1] + pluralWord[2] + pluralWord[3] + pluralWord[4];
console.log(singularWord)





var numberCompare = 11;
if((numberCompare >= 0 && numberCompare <= 100) && (numberCompare%10) === 0 ) {
     console.log('Esta dentro del rango 0 y 100 y es multiplo de 10')
}else{
    console.warn('No se encuentra en el rango de 0 y 100 y no es múltiplo de 10')
}
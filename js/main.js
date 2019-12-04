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


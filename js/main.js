/**
* Exercise 1.
* Se tiene una lista con el nombre de cada uno de los empleados, con los días que faltaron al trabajo
* Ej -> [ [David, 4], [Jose, 2] ]
* Si el sueldo diario son $450.00, y por cada día que faltaron se le descuenta el 2% del salario (no acumulable),
* cuanto es el sueldo final del empleado.
* OUTPUT: {name}: ${salary}.00
*/

var listEmployes        = [ ['Jose',4],['Pedro',2],['Luis',3]];
var salaryTotal      = [];
var payDays          = 30;
var salaryDay       = 450;
var percentDisccount = 2;

for(var count = 0; count <= listEmployes.length-1; count++){
    var salaryEmployee = salaryDay * payDays;
    for(var countInner = 0; countInner <= listEmployes[count][1]; countInner++){
        salaryEmployee = (salaryEmployee * (1-percentDisccount/100))
    }
    salaryTotal[count] = salaryEmployee;
    console.log(`${listEmployes[count][0]}:  ${salaryEmployee}`)
}


/**
* Functions
*/
const PI = 3.1416
function circleArea(radius){
    return PI*(radius**2)
}

console.log(circleArea(2))
console.log(circleArea(4))
console.log(circleArea(8))  


/**
* Exercise 2.
* Input :[['name','lastname'],['name','lastname'],...] 
* Output: name lastname
*/

var arrayNames = [['jorge',''],['','Luna'],['','perez'],['',''],['',''],['',''],['',''],['','']]
function concatNames(arrayNames){
    for(var count = 0; count <= arrayNames.length - 1; count++){
        var name = arrayNames[count][0];
        var lastName = arrayNames[count][1];
        if(name === "" && lastName === ""){ // both
            console.log(`Name ${count + 1}: --- ---`)
        }else if(name === "" && lastName !== ""){ // one
            console.log(`Name ${count + 1}: --- ${ lastName } `)
        }else if(name !== "" && lastName === ""){ // two
            console.log(`Name ${count + 1}: ${ name } ---`)
        }else{ // any
            console.log(`Name ${count + 1}: ${ name } ${ lastName } `)
        }
    }
}
concatNames(arrayNames)


/**
* Exercise 3. 
* Function verify a palindrome
*/
function verifyPalindrome(frase){
    frase.toLowerCase();
    var newFrase = "";
    var reverseFrase = ""
    // regex
    // newFrase = frase.replace(/\s+/g, '');
    // only for loop
    for(var count = 0; count < frase.length; count++){
        if(frase[count] !== ' '){
            newFrase += frase[count]
        }
    }
    
    for(var count = newFrase.length -1; count >= 0; count--){
        reverseFrase += newFrase[count];
    }
    if(newFrase === reverseFrase){
        return true;
    }else{
        return false;
    }
}
console.log(verifyPalindrome('anita lava la tina'))

/**
 *  Exercise 4. solve the secuence
 *  n1=1, n2=5, n3=13, n4=25
 *  Solution: n**2 + (n-1)**2 
 */

function patternShape(n){
    var numberShapeArea = n**2 + ((n-1)**2)
    return  numberShapeArea;
}
// call function patternShape
console.log(patternShape(1),patternShape(2),patternShape(3),patternShape(4))



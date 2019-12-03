// Exercise one. Foreign exchange

var MXNToConvert = 1;
var valueUSDToday = 19.57;
var valueEURToday = 21.68;
var valueMXNtoCUPToday = 0.76;
var valueCUCtoCUPToday = 25.75;
var CUCToCUP = valueMXNtoCUPToday * valueCUCtoCUPToday;
console.log('Dollars: '+ MXNToConvert / valueUSDToday );
console.log('Euro: '+ MXNToConvert / valueEURToday);
console.log('Cuban Convertible Peso: '+ MXNToConvert / CUCToCUP);


// Homework: My age in seconds

// Seconds equivalences
var secondsInMinutes = 60;
var secondsInHours   = 60 * secondsInMinutes; 
var secondsInDay     = 24 * secondsInHours;
var secondsInMonth   = 30 * secondsInDay;
var secondsInYear    = 12 * secondsInMonth;

// My age
var ageYear = 28; 
var ageMonth  = 6;
var ageDay = 21;

// calculate seconds
var ageYearToSeconds  = ageYear * secondsInYear;
var ageMonthToSeconds = ageMonth * secondsInMonth;
var ageDayToSeconds   = ageDay * secondsInDay;
console.log('Han pasado '+ (ageYearToSeconds + ageMonthToSeconds + ageDayToSeconds));
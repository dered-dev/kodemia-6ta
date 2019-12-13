/**
 * for in
 */

var arrayStudents = [
    {
        name: 'jorge',
        subjects: [
            {
                'name': 'History',
                'grade': 10
            },
            {
                'name': 'Math',
                'grade': 10
            },
            {
                'name': 'chemistry',
                'grade': 10
            }
        ]
    },
    {
        name: 'jorge',
        subjects: [
            {
                'name': 'History',
                'grade': 9
            },
            {
                'name': 'Math',
                'grade': 9
            },
            {
                'name': 'chemistry',
                'grade': 9
            }
        ]
    }
]

// single for 
const averageStudents = arrObject => {
    var averageStudents = 0;
    var totalStudents = 0;
    for (student in arrayStudents) {
        var average = 0;
        var subjects = arrayStudents[student].subjects
        for (var count = 0; count < subjects.length; count++) {
            average += subjects[count].grade
        }
        averageStudents += average / subjects.length
        totalStudents++
    }
    return averageStudents / totalStudents
}

// arrow function
const getFinalAverage = group => {
  return group.reduce((acc, cValue) => {
    return acc + cValue.subjects.reduce((acc2, cValue2) => {
      return acc2 + cValue2.grade
    }, 0) / cValue.subjects.length
  }, 0) / group.length
}


console.log(averageStudents(arrayStudents))
console.log(getFinalAverage(arrayStudents))

/**
 * Exerccise 2:
 * Abstraer el objeto persona con los datos necesarios para sacar el RFC sin homoclave, 
 * crear un array de personas y obtener un array con el RFC de cada uno
 */


var listRFCs = [
    {
        apaterno : 'camarillo',
        amaterno : 'cristobal',
        nombres  : 'jorge luis',
        year : '1991',
        month : '05',
        day : '12',
    },
    {
        apaterno : 'camarillo',
        amaterno : 'luna',
        nombres  : 'mario',
        year : '1995',
        month : '05',
        day : '12',
    }
]

const getRFC = (aPaterno, aMaterno, nombres,year,month,day) => {
    var vowels = 'aeiou'
    var temp = '';
    var firstLetter = aPaterno.split('').reduce(function(acc,letter,index){
        if(vowels.includes(letter) && index > 1){
            temp += letter;
        }
        return temp
    }).substring(0,1);
    var letters = `${ aPaterno.substring(0,1) }${ firstLetter }${ aMaterno.substring(0,1) }${ nombres[0] }`;
    var numbers = `${ year.substring(2) }${ month.substring(0,2) }${ day.substring(0,2) }`
    return letters + numbers
}
const getListRFC = arr => {
    return arr.map((cvalue) => {
        return getRFC(cvalue.apaterno, cvalue.amaterno, cvalue.nombres, cvalue.year, cvalue.month, cvalue.day)
    })
}
console.log(getListRFC(listRFCs))

/**
 * Exercise 3
 * Abstraer el objeto alumno, y dado un array de alumnos dar promedio por materia por periodo
 */


var AveragePersubject = studentList => studentList.map((cValue)=>{
    console.log(studentList)
})
AveragePersubject(arrayStudents)






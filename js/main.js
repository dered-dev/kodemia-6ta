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
                'name': 'History',
                'grade': 10
            },
            {
                'name': 'History',
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
                'name': 'History',
                'grade': 9
            },
            {
                'name': 'History',
                'grade': 9
            }
        ]
    },
    {
        name: 'jorge',
        subjects: [
            {
                'name': 'History',
                'grade': 8.3
            },
            {
                'name': 'History',
                'grade': 9
            },
            {
                'name': 'History',
                'grade': 7
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
        createRFC: function(){
            return getRFC(this.apaterno,this.amaterno,this.nombres,this.year,this.month,this.day)
        }
    },
    {
        apaterno : 'camarillo',
        amaterno : 'luna',
        nombres  : 'mario',
        year : '1995',
        month : '05',
        day : '12',
        createRFC: function(){
            return getRFC(this.apaterno,this.amaterno,this.nombres,this.year,this.month,this.day)
        }
    }
]

const getRFC = (aPaterno, aMaterno, nombres,year,month, day, temp = "") => {
    var vowels = 'aeiou'
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
    return arr.map((cvalue) => cvalue.createRFC())
}
console.log(getListRFC(listRFCs))

/**
 * Exercise 3
 * Abstraer el objeto alumno, y dado un array de alumnos dar promedio por materia por periodo
 */


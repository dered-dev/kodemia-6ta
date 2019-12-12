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


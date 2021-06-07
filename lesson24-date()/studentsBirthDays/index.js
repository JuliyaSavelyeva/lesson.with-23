export const studentsBirthDays= (students) => {
  const sortArray = students.map(({name, birthDate}) => {
    return birthDate;
  })

  console.log(sortArray);

}

const studentsArray = [
  {name: 'Tom', birthDate: '01/15/2010'},
  {name: 'Ben', birthDate: '01/17/2008'},
  {name: 'Sam', birthDate: '03/15/2010'},
]

console.log(studentsBirthDays(studentsArray));
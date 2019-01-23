function getRandomEmployeeCode() {
  return Math.floor(1000 + Math.random() * 9000);
}

export const employeeListMock = [
  {
    name: 'Eric',
    lastName: 'Guzman',
    title: 'Sales Representative',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-05T16:02:12.031Z'
  },
  {
    name: 'Enmanuel',
    lastName: 'Guzman',
    title: 'Sales Representative',
    employeeCode: 8400,
    employeePhoto: 'images/employees/enmanuel-guzman-8400.png',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : true,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-02-01T16:02:12.031Z'
  },
  {
    name: 'Emily',
    lastName: 'Rubens',
    title: 'Manager',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-05T16:02:12.031Z'
  },
  {
    name: 'Leonardo',
    lastName: 'Matas',
    title: 'Sales Representative',
    employeeCode: 8401,
    employeePhoto: 'images/employees/leonardo-matas-8401.jpg',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : true,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-02-15T16:02:12.031Z'
  },
  {
    name: 'Pedro',
    lastName: 'Almanzar',
    title: 'Sales Representative',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2018-12-31T16:02:12.031Z'
  },
  {
    name: 'Juan',
    lastName: 'Diaz',
    title: 'Web Developer',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-05T16:02:12.031Z'
  },
  {
    name: 'Alexis',
    lastName: 'Lopez',
    title: 'Web Developer',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-25T16:02:12.031Z'
  },
  {
    name: 'Rosaura',
    lastName: 'Caba',
    title: 'Web Developer',
    employeeCode: 8403,
    employeePhoto: 'images/employees/rosaura-caba-8403.jpg',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : true,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-02-10T16:02:12.031Z'
  },
  {
    name: 'Jose',
    lastName: 'Gomez',
    title: 'iOS Developer',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-10T16:02:12.031Z'
  },
  {
    name: 'Patric',
    lastName: 'Rodriguez',
    title: 'iOS Developer',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-05T16:02:12.031Z'
  },
  {
    name: 'Leon',
    lastName: 'Guzman',
    title: 'Sales Representative',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-05T16:02:12.031Z'
  },
  {
    name: 'Natalia',
    lastName: 'Mendez',
    title: 'Android Developer',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-05T16:02:12.031Z'
  },
  {
    name: 'Manuel',
    lastName: 'Rosario',
    title: 'Android Developer',
    employeeCode: 3402,
    employeePhoto: 'images/employees/manuel-rosario-8402.jpg',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : true,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-27T16:02:12.031Z'
  },
  {
    name: 'Rafael',
    lastName: 'Mars',
    title: 'Manager',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-05T16:02:12.031Z'
  },
  {
    name: 'Andres',
    lastName: 'Encarnacion',
    title: 'Manager',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2018-12-31T16:02:12.031Z'
  },
  {
    name: 'Alberto',
    lastName: 'Santos',
    title: 'Sales Representative',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-05T16:02:12.031Z'
  },
  {
    name: 'Jennifer',
    lastName: 'Lopez',
    title: 'Sales Representative',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-25T16:02:12.031Z'
  },
  {
    name: 'Stephanie',
    lastName: 'Wissin',
    title: 'Sales Representative',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-05T16:02:12.031Z'
  },
  {
    name: 'Nicole',
    lastName: 'Sanchez',
    title: 'Sales Representative',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-10T16:02:12.031Z'
  },
  {
    name: 'Paola',
    lastName: 'Reid',
    title: 'Sales Representative',
    employeeCode: getRandomEmployeeCode(),
    employeePhoto: '',
    hireDate: '2018-12-26T16:02:12.031Z',
    vacationActive : false,
    vacationStarts: '2018-12-28T16:02:12.031Z',
    vacationEnds: '2019-01-05T16:02:12.031Z'
  },
];

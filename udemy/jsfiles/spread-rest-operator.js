const numbers = [1, 2, 3];

const newNumber = [...numbers, 4,5,6];

console.log(newNumber);

const Person = {
  name: 'Max'
};

const newPerson = {
   ...Person,
  age:24
}

console.log(newPerson);

const filter = (...args) => {
  return args.filter( el => el === 2 );
}

console.log(filter(1, 2, 3));
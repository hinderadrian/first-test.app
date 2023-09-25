
const username: string = 'Hinder';

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2)

class Person {
  age :number;
  lastName : string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const hinderPerson = new Person(24, "Alvarez");




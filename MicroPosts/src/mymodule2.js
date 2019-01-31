/* export -> Accessible outside of this file */
export const person = {
  name: 'John',
  age: 30
}

export function sayHello() {
  return `Hello ${person.name}`;
}

const greeting = 'Hello World';
export default greeting; /* we use default instead of curly braces */


const userChosenKeyName = 'level';
let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: '123',
  greet: function() {
    alert('Hi there!');
  },
  1.5: 'hello'
};


const keyName = 'first name';

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person[userChosenKeyName]);
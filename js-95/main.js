function helloName(name) {
  return ('Hello ' + name);
}

console.log(helloName('Anton'));

/* ======================================================================== */

const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {

    console.log(numbers[i])
  }
}

/* ======================================================================== */

function calculator(a, b, operator) {
  if (operator === '+') {
    return a + b;
  } else if (operator === '-') {
    return a - b;
  } else if (operator === '*') {
    return a * b;
  } else if (operator === '/') {
    if (b !== 0) {
      return a / b;
    } else {
      return 'error';
    }
  }
}

let result1 = calculator(5, 3, '-');
let result2 = calculator(9, 3, '+');
let result3 = calculator(6, 7, '*');
let result4 = calculator(15, 3, '/');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

/* ======================================================================== */

const user = {
  anton: {
    name: 'Anton',
    age: 21,
    height: 180,
    sayHello(name) {
      console.log(`Hello ${name}!`)
    }
  }
}

console.log(user.anton)
user.anton.sayHello('Curator')

/* ======================================================================== */
const users = [
  {
    name: 'Alex', age: 28, isAdmin: true
  },
  {
    name: 'Jack', age: 20, isAdmin: false
  },
  {
    name: 'Anton', age: 21, isAdmin: true
  },
  {
    name: 'Olga', age: 50, isAdmin: false
  },
  {
    name: 'Eve', age: 24, isAdmin: true
  },
  {
    name: 'Snake', age: 35, isAdmin: false
  },
]

let allUsers = 0

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    allUsers++;
  }
}

console.log(allUsers);
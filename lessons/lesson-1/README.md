# Lesson One

## `var`, `let`, and `const`

ES6 has added two new ways to define variables, in addition to the venerable `var`. `let` and `const` differ significantly
from `var` in both their scoping rules and in their mutability. `var` allows you to reassign the value at any time, while 
`const` and `let` can only be declared once. Once declared, `let` can be reassigned, where `const` cannot. 

While it may seem odd, you should generally use `const`, reserving `let` for variables that will actually
change, also know as 'mutable' variables.

```javascript
// This works
var name = 'Death Star';
var name = 'Executor';

// This does not
let name = 'Death Star';
let name = 'Executor';

// But this does
let name = 'Death Star';
name = 'Executor';

// This does not work either
const name = 'Death Star';
const name = 'Executor';
 
// And neither does this
const name = 'Death Star';
name = 'Executor';
```

There are some differences in scoping as well. `let` is block scoped and can be used within `if` statements 
and `for` loops, where `var` cannot. Hoisting, where varaiables need to be declared at the top of a scope
is no longer needed.

## Scoping
// TODO add more scoping information

```javascript
const planets = [
  { name: 'Alderaan' },
  { name: 'Tatooine' }
];

for (i in planets) {
  let planet = planets[i];
  console.log(planet.name);
}
```

## Using Const with Arrays and Objects

While an array or object that is assigned using `const` cannot be reassigned, this does not mean that
its value cannot be changed. So imagine an object representing a starship:

```javascript
const starship = {
  name: 'X-Wing',
  crew: 1,
  currentSpeed: 0
};
```

If you change the `currentSpeed`, it will simply be updated. The `const` does not "freeze" the object
as do some langauges. All it prevents is re-assigment. So if you try to make a new variable in the 
same scope, it will throw an error:

```javascript
const starship = {
  name: 'X-Wing',
  crew: 1,
  currentSpeed: 0
};

// Throws an Error
const starship = {
  name: 'Y-Wing',
  crew: 1,
  currentSpeed: 0
};
```


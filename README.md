# ES6 Introduction

## What's in this Tutorial?

## Setup

Do the usual npm install 

```
npm install
```

To run the code for a particular lesson, just run:

```
npm start -- lesson-[number]
```

```
const main = async () => {
  for (let item of items) {
    const data = await myPromise(item);
    console.log(data);
  }
  const results = await Promise.all(items.map(item => myPromise(item)));
  console.log(results);
};
```

# Lesson One
* `this` 
* arrow functions
* var / let / const

# Lesson Two? -- Loops and Array Methods
* for loop
* for / of
* for / in
* Array.prototype.forEach
* Array.prototype.filter
* Array.prototype.find
* Array.prototype.map
* Array.prototype.reduce

# Lesson Three - Promises and Async / Await
* Error handling
* for / loops
* Promise.all
* Throttling / Sequential execution

# ES Modules and CommonJS
* require vs import
* partial imports
* export vs. module.exports

# Typescript? 
* tsconfig.json
* tslint
* Unbounce standard configs

# Destructuring / Object.assign / Spread 
* Object.assign
* Destructing assignments 
* Array Spread Operator
* Object Spread Operator

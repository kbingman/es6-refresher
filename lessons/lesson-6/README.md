# Functional vs Object Oriented Programming

While ES6 now offers a Class keyword, it is little more than syntatic sugar
wrapped around a standard Javascript function. You may be familar with these
constructions and they often offer an easy way to maintain state and organization.

There is another approach that can make Javascript easier to understand and eliminate 
some of the harder concepts, especially `new` and `this`. This approach is known 
as `functional` programming, with concepts taken from languages such as Haskell. 

## Pure Functions

A pure function is simply a function that returns the same output for any given 
input regardless of any environmental changes or external variables. A simple example
would be a `sum` function that simply return the sum of two numbers.

```javascript
const sum = (a, b) => {
  reutrn a + b;
};

sum(2, 2) // 4
```

An "impure" example would look something like this: 

```
const a = 2;

const sum = (a) => {
  return sum + a;
}

sum(2) // 4
```

Seemingly the same as the first function, but everything changes depending on the value of "a". 
While this might seem like a small difference, it is an important one. Without knowing the value 
of "a" we cannot predict what the function will produce. 

# Lesson Two -- Loops and Array Methods

## For Loops

You should be familar with the standard `for` loop, a long standing feature of Javascript and a construction
common to many programming languages.

```javascript
const planets = ['Alderaan', 'Hoth', 'Dagobah'];

for (let i = 0; i++; i < length) {
  const p = planets[i];
  console.log(p);
}
```

ES6 introduced 2 new variants of the classic `for` loop: ` for...in` and `for...of`.
The `for ... in` loop works much like a classic loop, but without the verbose construction. A variable is used 
which represents the index of the base array. Objects within the array need to be accessed using the index, 
just as with the standard for loop.

```javascript
for (let i in planets) {
  console.log(planets[i]);
}
```

The `for ... of` loop is very similar to the `for ... in` loop, but instead of a variable that represents the 
index, a variable is returned representing the object itself. 

```javascript
for (let planet of planets) {
  console.log(planet);
}
```

## Array Methods

ES5 introduced several new Array methods, such as `forEach`, `map`, `reduce` and `filter`. ES6 expands upon these 
to include `find` and `includes`, among others. 

### ForEach

ForEach simply interates over each object in function, but returns nothing. In effect, this is very similar to the 
loops above.

```javascript
planets.forEach(planet => {
  console.log(planet);
});
```

### Map

Map simply interates over each object in function, returning an array the same size as the original. This can be used 
to extract information or transform the items in the original array. 

```javascript
const names = planets.map(planet => {
  return planet.toUpperCase();
});

# ['ALDERAAN', 'HOTH', 'DAGOBAH'];
```

### Reduce

Reduce interates over each object in function, returning an accumalated value. The starting value can be an Array, Object
Number or even a String. This is a very powerful function, but can sometimes be a little confusing to use. It takes a 
minimum of 2 arguments, the `accumulator` and the `item` from the array.a

```javascript
const planets = [
  { name: 'Alderaan', surface_water: 8 }, 
  { name: 'Hoth', surface_water: 100 }, 
  { name: 'Dagobah', surface_water: 8 }
];

const names = planets.reduce((acc, planet) => {
  acc[planet.name] = planet.surface_water;  
  return acc;
});

// {
//   Alderaan: 8 , 
//   Hoth: 100 , 
//   Dagobah: 8 
// }
```



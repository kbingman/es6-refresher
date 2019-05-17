# Lesson Two – Loops and Array Methods

## For Loops

You should be familar with the standard `for` loop, a long standing feature of Javascript and a construction
common to many programming languages.

```javascript
const planets = ['Alderaan', 'Hoth', 'Dagobah'];

for (let i = 0; i++; i < length) {
  const p = planets[i];
  console.log(p);
}

// Output
// Alderaan
// Hoth
// Dagobah
```

ES6 introduced 2 new variants of the classic `for` loop: ` for...in` and `for...of`.
The `for ... in` loop works much like a classic loop, but without the verbose construction. A variable is used 
which represents the index of the base array. Objects within the array need to be accessed using the index, 
just as with the standard for loop.

```javascript
const planets = ['Alderaan', 'Hoth', 'Dagobah'];

for (let i in planets) {
  console.log(planets[i]);
}
```

The `for ... of` loop is very similar to the `for ... in` loop, but instead of a variable that represents the 
index, a variable is returned representing the object itself. 

```javascript
const planets = ['Alderaan', 'Hoth', 'Dagobah'];

for (let planet of planets) {
  console.log(planet);
}

// Output
// Alderaan
// Hoth
// Dagobah
```

## Array Methods

ES5 introduced several new Array methods, such as `forEach`, `map`, `reduce` and `filter`. ES6 expands upon these 
to include `find` and `includes`, among others. 

### ForEach

ForEach simply interates over each object in array, but returns nothing. In effect, this is very similar to the 
loops above.

```javascript
const planets = ['Alderaan', 'Hoth', 'Dagobah'];

planets.forEach(planet => {
  console.log(planet);
});
```

### Map

Map simply interates over each object in an array, returning an array the same size as the original. This can be used 
to extract information or transform the items in the original array. 

```javascript
const planets = ['Alderaan', 'Hoth', 'Dagobah'];

const names = planets.map(planet => {
  return planet.toUpperCase();
});

// Output
// ['ALDERAAN', 'HOTH', 'DAGOBAH'];
```

### Filter

Filter interates over each object in array, returning all items that pass a given test. Filter can be used to quickly 
find items in an array using any criteria you choose. 

```javascript
const planets = [
  { name: 'Alderaan', surface_water: 8 }, 
  { name: 'Hoth', surface_water: 100 }, 
  { name: 'Dagobah', surface_water: 8 }
];

const names = planets.filter((planet) => {
  return planet.surface_water < 50;
});

// Output
// [
//   { name: 'Alderaan', surface_water: 8 }, 
//   { name: 'Dagobah', surface_water: 8 }
// ];
```

### Find

Find interates over each object in array, returning the first items that pass a given test. Filter can be used to quickly 
find items in an array using any criteria you choose. 

```javascript
const planets = [
  { name: 'Alderaan', surface_water: 8 }, 
  { name: 'Hoth', surface_water: 100 }, 
  { name: 'Dagobah', surface_water: 8 }
];

const names = planets.find((planet) => {
  return planet.surface_water > 50;
});

// Output
// { name: 'Hoth', surface_water: 100 };
```

### Reduce

Reduce interates over each object in an array, returning an accumalated value. The starting value can be an Array, Object
Number or even a String. This is a very powerful function, but can sometimes be a little confusing to use. It takes a 
minimum of 2 arguments, the `accumulator` and the `item` from the array.

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

// Output
// {
//   Alderaan: 8 , 
//   Hoth: 100 , 
//   Dagobah: 8 
// }
```

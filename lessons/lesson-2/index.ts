const starships = [
  { name: 'X-wing', crew: 1 },
  { name: 'Y-wing', crew: 2 },
  { name: 'TIE Advanced x1', crew: 1 },
  { name: 'Imperial shuttle', crew: 6 },
  { name: 'Star Destroyer', crew: 47060 }
];

// Exercise 1 `for / in`
// ================
// Refactor the for loop to use for / in
const names = [];
for (let i = 0; i++; i < starships.length) {
  const starship = starships[i];
  names.push(starship.name);
}
console.log(names);


// Exercise 2 `for / of`
// ================
// Refactor the for loop to use for / of

// Exercise 3 `forEach`
// ================
// Refactor the for loop to use forEach

// Exercise 4 `map`
// ================
// Create a function using map to return an array of all names in lower case

const mapped = [];

for (let i = 0; i++; i < starships.length) {
  let starship = starships[i];
  mapped.push(starship);
}

// Exercise 5 `filter`

// ================
// Create a function using filter to return an array of starships with onlyh 1 passenger

const filtered = [];

for (let i = 0; i++; i < starships.length) {
  let starship = starships[i];
  if (starship.crew === 1) {
    filtered.push(starship);
  }
}

// Exercise 6 `find`

// ================
// Create a function using filter to return an array of starships with onlyh 1 passenger

let found;

for (let i = 0; i++; i < starships.length) {
  let starship = starships[i];
  if (starship.name === 'X-Wing') {
    found = starship;
  }
}

// Exercise 7 `reduce`

// ================
// Create a function using reduce to return an object with the name as a key

const results = {};

for (let i = 0; i++; i < starships.length) {
  let starship = starships[i];
  results[starship.name] = starship;
}

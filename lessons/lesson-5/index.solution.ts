import fetch from 'node-fetch';

const API = 'https://swapi.co/api';

// Exercise 1 - Basic Promise
// ================================
// Create a Promise than fetches a list of Planets from the SWAPI,
// then logs each planet name

const fetchPlanets = async () => {
  const response = await fetch(`${API}/planets`);
  const json = await response.json();
  return json();
};

// fetchPlanets().then(results => console.log(results));

// Exercise 2 - Catching Errors with `.catch`
// ================================
// Add error handling that logs out any potential errors using `.catch`
const fetchPlanetsWithError = async () => {
  try {
    const response = await fetch(`${API}/planets`);
    const json = await response.json();
    return json();
  } catch (err) {
    return err;
  }
};

// Exercise 3 - Executing Sequential Promises with chaining
// ================================
// Fetch first a person, then some data associated with that person, 
// their planet, starship, or any films assoicated with them and display both
const fetchPersonAndHomeWorld = async () => {
  try {
    const person = await fetch(`${API}/people/1`).then(r => r.json())
    const planet = await fetch(person.homeworld);

    return { person, planet};
  } catch (err) {
    console.log(err);
    return { error: err.message }
  }
};

// fetchPersonAndHomeWorld().then(results => console.log(results));

// Exercise 4 - Executing Multiple Promises with `Promise.map`
// ================================
// Fetch a list of all endpoints, then use `Promise.all` to fetch each 
// endpoint simultaneously
const fetchAllData = async () => {
  const jobs = [ 
    fetch(`${API}/people`).then(r => r.json()), 
    fetch(`${API}/planets`).then(r => r.json())
  ];
  try {
    const results = await Promise.all(jobs);
    return results;
  } catch (err) {
    return { error: err.message }
  }
};

// console.log(fetchAllData())

// Exercise 5 - Executing Sequential Promises with `for` loops
// ================================
// Fetch a list of all endpoints, then use `for loop` to fetch each 
// endpoint sequentially
const fetchLoopedData = async () => {
  const urls = [ 
    `${API}/people`, 
    `${API}/planets`
  ];

  const results = [];
  for (let url of urls) {
    let result = await fetch(url).then(r => r.json());
    results.push(result);       
  }
  return results;
};

fetchLoopedData().then(results => console.log(results));

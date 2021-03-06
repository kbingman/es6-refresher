import fetch from 'node-fetch';

const API = 'https://swapi.co/api';

// Exercise 1 - Basic Promise
// ================================
// Create a Promise than fetches a list of Planets from the SWAPI,
// then logs each planet name

const fetchPlanets = () => {
  return fetch(`${API}/planets`).then(r => r.json());
};

// fetchPlanets().then(results => console.log(results));

// Exercise 2 - Catching Errors with `.catch`
// ================================
// Add error handling that logs out any potential errors using `.catch`
const fetchPlanetsWithError = () => {
  return fetch(`${API}/planets`).then(r => r.json()).catch(err => console.log(err));
};

// Exercise 3 - Executing Sequential Promises with chaining
// ================================
// Fetch first a person, then some data associated with that person, 
// their planet, starship, or any films assoicated with them and display both
const fetchPersonAndHomeWorld = () => {
  return fetch(`${API}/people/1`)
    .then(r => r.json())
    .then(person => {
       return fetch(person.homeworld).then(r => r.json()).then(planet => {
         return { person, planet};
       });
    })
    .catch(err => console.log(err));
};

// fetchPersonAndHomeWorld().then(results => console.log(results));

// Exercise 4 - Executing Multiple Promises with `Promise.map`
// ================================
// Fetch a list of all endpoints, then use `Promise.all` to fetch each 
// endpoint simultaneously
const fetchAllData = () => {
  const jobs = [ 
    fetch(`${API}/people`).then(r => r.json()), 
    fetch(`${API}/planets`).then(r => r.json())
  ];
  return Promise.all(jobs).catch(err => console.log(err));
};

// fetchAllData().then(results => console.log(results));

// Exercise 5 - Executing Sequential Promises with `for` loops
// ================================
// Fetch a list of all endpoints, then use `for loop` to fetch each 
// endpoint sequentially
const fetchLoopedData = () => {
  const jobs = [ 
    fetch(`${API}/people`).then(r => r.json()), 
    fetch(`${API}/planets`).then(r => r.json())
  ];

  const results = [];
  for (let job of jobs) {
    job.then(json => results.push(json));       
/bin/bash: :qa: command not found
  console.log(results);
  return results;
};
fetchLoopedData();

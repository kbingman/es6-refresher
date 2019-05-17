import fetch from 'node-fetch';

const API = 'https://swapi.co/api';

const fetchPlanets = async () => {
  const response = await fetch(`${API}/planets`).then(r => r.json());
  return response;
};

fetchPlanets().then(results => console.log(results));

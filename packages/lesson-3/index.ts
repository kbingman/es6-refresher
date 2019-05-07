import fetch from 'node-fetch';

class PlanetsAPI {
  public planets = [];
  public api = 'https://swapi.co/api/planets/';
  public count = 0;

  async fetchPlanets () {
    const { count, results } = await fetch(this.api).then(r => r.json());
    this.planets = results;
    this.count = count;
  }
}

const api = new PlanetsAPI();

api.fetchPlanets().then(() => console.log(api));

// TODO Come up with another example

class Planets {
  public planets = [];

  constructor (planets) {
    this.planets = planets;
  }
  
  extractName (planet) {
    return planet.name;
  }

  showPlanetNames () {
    const self = this;
    self.planets.forEach(function (planet) {
      console.log(self.extractName(planet));
    });
  }
}

const list = new Planets([
  { name: 'Alderaan', surface_water: 8 },
  { name: 'Hoth', surface_water: 100 }
]);

list.showPlanetNames();

// Exercise 1
// ================
// Update the `showPlanetNames` method to use arrow functions
//
